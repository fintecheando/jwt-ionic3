import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
    import { AppointmentPage } from './appointment';
import { AppointmentEventPage } from '../appointment-event/appointment-event';

@NgModule({
  declarations: [
    AppointmentPage,
    AppointmentEventPage,
  ],
  imports: [
  AppointmentEventPage,
    IonicPageModule.forChild(AppointmentPage),
  ],
  exports: [
    AppointmentPage
  ],
  entryComponents: [
      AppointmentEventPage
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppointmentPageModule {}
