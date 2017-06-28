import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
//import { NativeStorage } from '@ionic-native/native-storage';
import { UserProfileService } from '../../providers/userProfile-service';
import { DoctorService } from '../../providers/doctor-service';
import { MyAccountPage } from '../my-account/my-account';
import * as models from '../../models/models';
import 'rxjs/Rx';

@Component({
  selector: 'user-profile-page',
  templateUrl: 'user-profile.html'
})
export class UserProfilePage {
  profileForm: FormGroup;
  loading: any;
  private allCountries: any[] = [];

  constructor(
    public nav: NavController,
    public modal: ModalController,
    public loadingCtrl: LoadingController,
    //private nativeStorage: NativeStorage,
    private userProfile: UserProfileService,
    private doctor: DoctorService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController  
  ) {
    this.loading = this.loadingCtrl.create();
    this.allCountries = [];
    this.profileForm = new FormGroup({
      name: new FormControl(),
      lastName: new FormControl(),
      secondLastName: new FormControl(),
      rfc: new FormControl(),
      curp: new FormControl(),
      nationality: new FormControl(),
      medicalLicense: new FormControl(),
      specialityLicence: new FormControl(),
      mobilePhoneNumber: new FormControl(),
      email: new FormControl()
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
                this.nav.push(MyAccountPage);
        }
      );
  }
}