import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../providers/auth-service';

import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { NgZone } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech';



@IonicPage()
@Component({
  selector: 'page-register-page',
  templateUrl: 'register-page.html',
})
export class RegisterPage {

  private regData: FormGroup;
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

    this.regData = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });

  }

  ionViewDidLoad() {
    //hide menu when on the login page, regardless of the screen resolution
    this.menuCtrl.enable(false);
    
    this.tts.speak({
        locale: 'es-US',
            rate: 0.9,
            text: 'Afíliate como Médico'
        })
        .then(() => console.log('Success'))
        .catch((reason: any) => console.log(reason));
    
    
  }

  register() {
    
    this.authService.register(this.regData.value)
      .then(() => this.navCtrl.setRoot('ProfilePage'))
      .catch(e => console.log("reg error", e));         
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
    
    listen(): void {
    console.log('listen action triggered');
    if (this.isListening) {
      this.speech.stopListening();
      this.toggleListenMode();
      return;
    }

    this.toggleListenMode();
    
    let _this = this;

    this.speech.startListening()
      .subscribe(matches => {
        _this.zone.run(() => {
          _this.matches = matches;
          _this.regData.controls['username'].setValue(matches[0]);
        })
      }, error => console.error(error));

    }

    toggleListenMode():void {
      this.isListening = this.isListening ? false : true;
      console.log('listening mode is now : ' + this.isListening);
    }

}
