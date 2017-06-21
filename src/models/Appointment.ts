import * as models  from './models';

export interface Appointment {
    appointmentId?: number;
    appointmentType?: models.AppointmentType;
    title?: string;
    description?: string;
    startDate?: Date;
    endDate?: Date;
    isAllDay?: boolean;
    isBusy?: boolean;
    reminders?: Array<models.Reminder>;
    reminderMethods?: Array<models.ReminderMethod>;
    attendees?: Array<models.User>;
    appointmentStatus?: Array<models.AppointmentStatus>;
    location?: models.MedicalInstitution;
    doctor?: models.Doctor;
    patient?: models.Patient;
    insurance?: models.MedicalInsurance;
    procedures?: string;
}
