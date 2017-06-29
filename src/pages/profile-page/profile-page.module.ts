import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MyProfilePage} from './profile-page';
import {TranslateModule} from '@ngx-translate/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { TextToSpeech } from '@ionic-native/text-to-speech';


@NgModule({
  declarations: [
    MyProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(MyProfilePage),
    TranslateModule.forChild()
  ],
  exports: [
    MyProfilePage
  ],
  providers: [
    SpeechRecognition,
    TextToSpeech 
  ]
})
export class ProfilePageModule {}
