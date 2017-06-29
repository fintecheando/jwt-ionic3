import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppointmentEventPage } from './appointment-event-page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppointmentEventPage,
  ],
  imports: [
    IonicPageModule.forChild(AppointmentEventPage),
    TranslateModule.forChild()

  ],
  exports: [
    AppointmentEventPage
  ],
  entryComponents: [
      //AppointmentEventPage
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
  
})
export class AppointmentEventPageModule {}