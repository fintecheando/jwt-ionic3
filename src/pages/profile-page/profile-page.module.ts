import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ProfilePage} from './profile-page';
import {TranslateModule} from '@ngx-translate/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { TextToSpeech } from '@ionic-native/text-to-speech';


@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
    TranslateModule.forChild()
  ],
  exports: [
    ProfilePage
  ],
  providers: [
    SpeechRecognition,
    TextToSpeech 
  ]
})
export class ProfilePageModule {}
