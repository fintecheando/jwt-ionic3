import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppointmentPage } from './appointment-page';
import { NgCalendarModule  } from 'ionic2-calendar';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppointmentPage,
    //AppointmentEventPage,
  ],
  imports: [
    NgCalendarModule,
    //IonicPageModule.forChild(AppointmentEventPage),
    IonicPageModule.forChild(AppointmentPage),
    TranslateModule.forChild()    
  ],
  exports: [
    AppointmentPage
  ],
  entryComponents: [
      //sAppointmentEventPage,
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppointmentPageModule {}
