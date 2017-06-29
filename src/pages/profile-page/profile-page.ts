import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {ProtectedPage} from '../protected-page/protected-page';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {UserModel} from '../../models/user.model';

import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { NgZone } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech';

import {AuthService} from '../../providers/auth-service';

@IonicPage()
@Component({
  selector: 'page-profile-page',
  templateUrl: 'profile-page.html',
})
export class MyProfilePage extends ProtectedPage {

  public user: UserModel;
  
  private profileData: FormGroup;
  isListening: boolean = false;
  matches: Array<String>;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    
    public formBuilder: FormBuilder,
    public speech: SpeechRecognition, 
    private tts: TextToSpeech,
    private zone: NgZone,
    public authService: AuthService) {
    
    super(navCtrl, navParams, storage);
    
    this.storage.get('user').then(user => {
      this.user = user;
    });
    
    this.profileData = this.formBuilder.group({
      name: ['', Validators.required],
      workPhone: ['', Validators.required],
      firstname: ['', Validators.required],
      secondname: ['', Validators.required]
    });
    
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(true);
    //hide menu when on the login page, regardless of the screen resolution
        //this.menuCtrl.enable(false);
        this.tts.speak({
            locale: 'es-US',
                rate: 0.9,
                text: 'Completa tú informacion como Paciente'
            })
            .then(() => console.log('Success'))
            .catch((reason: any) => console.log(reason));
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
    
    listenName(): void {
        console.log('listen action triggered');
        if (this.isListening) {
            this.speech.stopListening();
            this.toggleListenMode();
            return;
        }

        this.toggleListenMode();
    
        //let _this = this;

        this.speech.startListening()
            .subscribe(matches => {
                this.zone.run(() => {
                    this.matches = matches;
                    this.profileData.controls['name'].setValue(matches[0]);
                })
            }, error => console.error(error));
    }
    
    listenFirstName(): void {
        console.log('listen action triggered');
        if (this.isListening) {
            this.speech.stopListening();
            this.toggleListenMode();
            return;
        }

        this.toggleListenMode();
    
        //let _this = this;

        this.speech.startListening()
            .subscribe(matches => {
                this.zone.run(() => {
                    this.matches = matches;
                    this.profileData.controls['firstname'].setValue(matches[0]);
                })
            }, error => console.error(error));
    }
    
    listenSecondName(): void {
        console.log('listen action triggered');
        if (this.isListening) {
            this.speech.stopListening();
            this.toggleListenMode();
            return;
        }

        this.toggleListenMode();
    
        //let _this = this;

        this.speech.startListening()
            .subscribe(matches => {
                this.zone.run(() => {
                    this.matches = matches;
                    this.profileData.controls['secondname'].setValue(matches[0]);
                })
            }, error => console.error(error));
    }
    
    listenWorkPhone(): void {
        console.log('listen action triggered');
        if (this.isListening) {
            this.speech.stopListening();
            this.toggleListenMode();
            return;
        }

        this.toggleListenMode();
    
        //let _this = this;

        this.speech.startListening()
            .subscribe(matches => {
                this.zone.run(() => {
                    this.matches = matches;
                    this.profileData.controls['workPhone'].setValue(matches[0]);
                })
            }, error => console.error(error));
    }

    toggleListenMode():void {
      this.isListening = this.isListening ? false : true;
      console.log('listening mode is now : ' + this.isListening);
    }

}
