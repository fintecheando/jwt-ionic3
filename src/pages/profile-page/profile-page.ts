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
export class ProfilePage extends ProtectedPage {

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
  }

}
