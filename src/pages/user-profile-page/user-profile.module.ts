import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserProfilePage } from './user-profile';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    UserProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(UserProfilePage),
    TranslateModule.forChild()

  ],
  exports: [
    UserProfilePage
  ],
  entryComponents: [
      //AppointmentEventPage
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
  
})
export class UserProfilePageModule {}