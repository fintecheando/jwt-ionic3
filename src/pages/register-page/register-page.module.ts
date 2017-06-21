import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {RegisterPage} from './register-page';
import {TranslateModule} from '@ngx-translate/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    TranslateModule.forChild()
  ],
  exports: [
    RegisterPage
  ],
  providers: [
    SpeechRecognition,
    TextToSpeech 
  ]
})
export class RegisterPageModule {}
