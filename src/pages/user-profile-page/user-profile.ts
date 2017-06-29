import { Component } from '@angular/core';
import { IonicPage, NavController,NavParams, ModalController, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { UserProfileService } from '../../providers/userProfile-service';
import {ProtectedPage} from '../protected-page/protected-page';
import { DoctorService } from '../../providers/doctor-service';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { NgZone } from '@angular/core';
import {Storage} from '@ionic/storage';

import * as models from '../../models/models';
import 'rxjs/Rx';

@IonicPage()
@Component({
  selector: 'user-profile-page',
  templateUrl: 'user-profile.html'
})
export class UserProfilePage extends ProtectedPage  {
  profileForm: FormGroup;
  loading: any;
  private allCountries: any[] = [];
  private allSpecialities: any[] = [];
  showSpecialities: boolean = true;
  isListening: boolean = false;
  matches: Array<String>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,        
    public modal: ModalController,
    public loadingCtrl: LoadingController,
    private userProfile: UserProfileService,
    private doctor: DoctorService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public speech: SpeechRecognition,
    private tts: TextToSpeech,
    private zone: NgZone
  ) {
    super(navCtrl, navParams, storage);
    
    this.loading = this.loadingCtrl.create();
    this.allCountries = [];
    this.allSpecialities = [];
    this.profileForm = new FormGroup({
      name: new FormControl(),
      lastName: new FormControl(),
      secondLastName: new FormControl(),
      rfc: new FormControl(),
      curp: new FormControl(),
      nationality: new FormControl(),
      mobilePhoneNumber: new FormControl(),
      workPhone: new FormControl(),
      email: new FormControl(),
      facebook: new FormControl(),
      medicalLicense: new FormControl(),
      specialityLicence: new FormControl(),
      institution: new FormControl(),
      graduationDate: new FormControl(),
      hasSpeciality: new FormControl(),
      speciality: new FormControl(),
      cert1: new FormControl(),
      cert2: new FormControl(),
      cert3: new FormControl(),
      cert1Date: new FormControl(),
      cert2Date: new FormControl(),
      cert3Date: new FormControl(),
      profActivities: new FormControl(),
      distinctions: new FormControl(),
      asosiations: new FormControl(),
      otherstudies: new FormControl()
    });

    this.userProfile.getSpecialities()
      .then(specialities => {
        for (let i = 0; i < specialities.length; i++) {
            this.allSpecialities.push(specialities[i]);
        }
      });
  }

  ionViewDidLoad() {
    this.loading.present();
    /*this.profileService
      .getData()
      .then(data => {
        this.profile.user = data.user;
        this.profileForm.setValue({
          name: data.user.name,
          location: data.user.location,
          description: data.user.about,
          //currency: 'dollar',
          weather: 'fahrenheit',
          notifications: true
        });
        this.loading.dismiss();
      });*/
    this.loading.dismiss();
  }

  async hasPermission():Promise<boolean> {
        try {
                const permission = await this.speech.hasPermission();
                console.log(permission);
                return permission;
        } catch(e) {
            console.log(e);
        }
    }

    async getPermission():Promise<void> {
        try {
            this.speech.requestPermission();
        } catch(e) {
            console.log(e);
        }
    }

  onSearchCountry(searchEvent) {
    this.allCountries = [];
    let query = searchEvent.target.value
    if (query != null) {
      if (query.trim() === '' || query.trim().length < 3) { this.allCountries = []; }
      else {
        this.userProfile.getCountries()
          .then(countries => {
            for (let i = 0; i < countries.length; i++) {
              if (countries[i].name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) != -1) {
                this.allCountries.push(countries[i]);
              }
            }
          });
      }
    }
    else { this.allCountries = []; }
  }

  onCancelSearchCountry() { this.allCountries = []; }

  onCountrySelected(country) {
    if (country.name != null && country.name.length > 0) {
      this.allCountries = [];
      this.profileForm.controls['nationality'].setValue(country.name);
    }
  }

  save() {
    let newDoctor: models.Doctor = {
      userType: 'Doctor',
      name: this.profileForm.get('name').value,
      lastName: this.profileForm.get('lastName').value,
      secondLastName: this.profileForm.get('secondLastName').value,
      mobilePhoneNumber: this.profileForm.get('mobilePhoneNumber').value,
      email: this.profileForm.get('email').value,
      documents: [],
      addresses: [],
      promotions: [],
      paymentMethods: [],
      departments: [],
      specialtyDetails:[],
      //specialtyDetails: [{specialityLicence: this.profileForm.get('specialityLicence').value}],
      medicalLicense: this.profileForm.get('medicalLicense').value,

      electronicSignatures: []
    };

    this.doctor.save(newDoctor)
      .subscribe(
        (x) => console.log("Response " + x),
        (e) => { //console.log("Error " + e);
                let alert = this.alertCtrl.create({
                  title: 'Error', subTitle: 'Ocurrio un error al guardar la información, favor de reintentar más tarde',
                  buttons: ['Aceptar']
                });
                alert.present();                
              },
        () => {               
                let alert = this.alertCtrl.create({
                  title: '', subTitle: 'La información se guardo exitosamente',
                  buttons: ['Aceptar']
                });
                alert.present();                        
                //let toast = this.toastCtrl.create({ message: 'La información se guardo exitosamente', duration: 5000, position: 'middle' });
                //toast.onDidDismiss(() => { });
                //toast.present();
                this.navCtrl.push('ProfilePage');
        }
      );
  }

  onHasSpeciality(){
    let optionValue = this.profileForm.get('hasSpeciality').value;
    if (optionValue == true) { this.showSpecialities = false; }
    else { this.showSpecialities = true; }
  }

  toggleListenMode():void {
    this.isListening = this.isListening ? false : true;
    console.log('listening mode is now : ' + this.isListening);
  }

  listenCtrl(control): void {
      console.log("Listening" + control);
      if (this.isListening) {
          this.speech.stopListening();
          this.toggleListenMode();
          return;
      }
      this.toggleListenMode();
      this.speech.startListening()
          .subscribe(matches => {
              this.zone.run(() => {
                  this.matches = matches;
                  this.profileForm.controls['name'].setValue(matches[0]);
              })
          }, error => console.error(error));
  }
}