import { Http, Headers, URLSearchParams } from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, SegmentButton, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import * as models from '../../models/models';
import { BASE_PATH, COLLECTION_FORMATS } from '../../app/variables';
import { Configuration } from '../../app/configuration';
import { AppointmentService } from '../../providers/appointment-service';
import { UserProfileService } from '../../providers/userProfile-service';
import { AppointmentPage } from '../appointment/appointment';

import moment from 'moment';
import 'rxjs/add/operator/map';

@Component({
  selector: 'appointment-event-page',
  templateUrl: 'appointment-event.html',
})

export class AppointmentEventPage {
  eventForm: FormGroup;
  public event = {
    dateStart: new Date().toISOString(),
    dateEnd: new Date().toISOString(),
  }
  section: string;
  remidnerRadioOpen: false;
  isMedicalEvent: boolean;    //switch's form between personal event and medical event
  hasInsurance: boolean;
  reminderRadioResult: '';
  showTimes: boolean = true;
  reminders: any[] = [];
  private allPatients: any[] = [];

  constructor(public nav: NavController, public navParams: NavParams, public alertCtrl: AlertController, private appointmentEvent: AppointmentService, private userProfile: UserProfileService, private toastCtrl: ToastController) {
    this.section = "personal";
    this.isMedicalEvent = false;
    this.hasInsurance = false;
    this.reminders = [];
    this.allPatients = [];
    //this.procedures = [{id: 1,title:'Revision'},{id: 2,title:'Cirugia'}, {id: 2,title:'PostCirugia'}];
    var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    var localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1); //Get local dateTime ISO format
    this.event.dateStart = new Date(localISOTime).toISOString();
    this.event.dateEnd = new Date(moment(localISOTime).subtract(new Date(localISOTime).getTimezoneOffset(), 'minutes').toDate()).toISOString();
    this.event.dateEnd = new Date(moment(this.event.dateEnd).add(1, 'hours').toDate()).toISOString();     //Add 1 hour
    this.eventForm = new FormGroup({
      isAllDay: new FormControl(false, Validators.required),
      title: new FormControl('', Validators.required),
      dateStart: new FormControl(this.event.dateStart, Validators.required),
      dateEnd: new FormControl(this.event.dateEnd, Validators.required),
      description: new FormControl('', Validators.required),
      isBusy: new FormControl(false, Validators.required),
      hasInsurance: new FormControl(false, Validators.required),
      newItemElement: new FormControl('', Validators.required),
      procedure: new FormControl('', Validators.required)
    });

  }

  saveEvent() {
    let newAppointment: models.Appointment = {
      title: this.eventForm.get('title').value,
      description: this.eventForm.get('description').value,
      startDate: this.eventForm.get('dateStart').value,
      endDate: this.eventForm.get('dateEnd').value,
      isAllDay: this.eventForm.get('isAllDay').value,
      reminders: [],
      reminderMethods: [],
      attendees: [],
      appointmentStatus: [],
      procedures: this.eventForm.get('procedure').value
    };
    let newAppointmentType: models.AppointmentType = { id: this.section === "personal" ? 1 : 2, }
    newAppointment.isBusy = this.section === "personal" ? this.eventForm.get('isBusy').value : true;   //Medical event allways busy
    newAppointment.appointmentType = newAppointmentType;
    for (let i = 0; i < this.reminders.length; i++) {
      let newReminder: models.Reminder = { id: this.reminders[i] };
      newAppointment.reminders.push(newReminder);
    }
    let newReminderMethods: models.ReminderMethod = { id: 1 }
    newAppointment.reminderMethods.push(newReminderMethods);
    let newLocation: models.MedicalInstitution = { institutionId: 1 }
    newAppointment.location = newLocation;
    let newDoctor: models.Doctor = { userId: 2 }
    newAppointment.doctor = newDoctor;
    let newPatient: models.Patient = { userId: 5 }
    newAppointment.patient = newPatient;
    let newInsurance: models.MedicalInsurance = { id: 1 }
    newAppointment.insurance = newInsurance;

    let toast = this.toastCtrl.create({ message: 'El evento se agrego a tu agenda exitosamente', duration: 5000, position: 'middle', showCloseButton	: true });

    toast.onDidDismiss(() => {
      //console.log('Dismissed toast');
    });

    toast.present();
    this.nav.push(AppointmentPage);

    this.appointmentEvent.createAppointment(newAppointment)
      .subscribe(
      (e) => //console.log(e),
        () => {
          //this.slimLoadingBarService.complete();
          /*let index = this.appointmentsScheduled.indexOf(appointment);
          if (index > -1) {
            this.appointmentsScheduled.splice(index, 1);
          }
          this.appointmentsCheckedIn.push(appointment);*/

        }
      );
  }

  onSearchPatient(searchEvent) {
    let term = searchEvent.target.value
    // We will only perform the search if we have 3 or more characters
    if (term != null) {
      if (term.trim() === '' || term.trim().length < 3) {
        this.allPatients = [];
      } else {
        this.userProfile.getUser(undefined, term, undefined, undefined, undefined)
          .subscribe(usersProfile => {
            this.allPatients = usersProfile;
          });
      }
    }
    else { this.allPatients = []; }
  }

  onCancelSearchPatien() { this.allPatients = []; }

  ionViewDidLoad() {

  }

  onSegmentChanged(segmentButton: SegmentButton) {
    if (segmentButton.value == 'personal')
    { this.isMedicalEvent = false; }
    else { this.isMedicalEvent = true; }
  }

  onSegmentSelected(segmentButton: SegmentButton) {
    //console.log('Segment selected' + segmentButton.value);
  }

  createPersonalEvent() {

  }

  onIsAllDay() {
    let optionValue = this.eventForm.get('isAllDay').value;
    if (optionValue == true) { this.showTimes = false; }
    else { this.showTimes = true; }
  }

  onHasInsurance() {

  }

  removeReminder(reminder: string) {
    this.reminders.splice(this.reminders.indexOf(reminder), 1);
  }

  addReminder() {
    let alert = this.alertCtrl.create({ cssClass: 'category-prompt' });
    //alert.setTitle('Lightsaber color');
    alert.addInput({ type: 'radio', label: '1 minuto', value: '1', checked: false });
    alert.addInput({ type: 'radio', label: '5 minutos', value: '2', checked: false });
    alert.addInput({ type: 'radio', label: '10 minutos', value: '3', checked: false });
    alert.addInput({ type: 'radio', label: '15 minutos', value: '4', checked: false });
    alert.addInput({ type: 'radio', label: '20 minutos', value: '5', checked: false });
    alert.addInput({ type: 'radio', label: '25 minutos', value: '5', checked: false });
    alert.addInput({ type: 'radio', label: '30 minutos', value: '6', checked: false });
    alert.addButton("Cancelar");
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.remidnerRadioOpen = false;
        this.reminderRadioResult = data;
        if (data != null)
          this.reminders.push(data);
      }
    });
    alert.present();
  }
}