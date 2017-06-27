import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicPageModule,IonicApp, IonicModule } from 'ionic-angular';
import { AppointmentPage } from './appointment-page';
//import { AppointmentEventPage } from '../appointment-event-page/appointment-event-page';
import { NgCalendarModule  } from 'ionic2-calendar';

@NgModule({
  declarations: [
    AppointmentPage,
   // AppointmentEventPage,
  ],
  imports: [
  NgCalendarModule,
  //AppointmentEventPage,
    IonicPageModule.forChild(AppointmentPage),
  ],
  exports: [
    AppointmentPage
  ],
  entryComponents: [
      //AppointmentEventPage
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppointmentPageModule {}
