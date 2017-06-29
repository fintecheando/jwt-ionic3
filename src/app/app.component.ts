import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AuthService} from '../providers/auth-service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'ProfilePage';

  pages: Array<{title: string, component: any, method?: any, icon?: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public authService: AuthService,
    translate: TranslateService) {

    this.initializeApp();

    translate.setDefaultLang('en');

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'page.appointment.title'  , component: 'AppointmentPage'              ,icon:'calendar'},       //calendar
      {title: 'page.pendings.title'     , component: 'MyProfilePage'                ,icon:'md-alert'},       //md-alert
      {title: 'page.medicalVisit.title' , component: 'MedicalVisitPage'             ,icon:'md-chatbubbles'}, //md-chatbubbles
      {title: 'page.notes.title'        , component: 'NotesPage'                    ,icon:'md-document'},    //md-document
      {title: 'page.myTeam.title'       , component: 'MyTeamPage'                   ,icon:'ios-people'},     //ios-people
      {title: 'page.patients.title'     , component: 'PatientPage'                  ,icon:'ios-person'},     //ios-person
      {title: 'page.prescriptions.title', component: 'PrescriptionsPage'            ,icon:'md-medkit'},      //md-medkit
      {title: 'page.insurances.title'   , component: 'InsurancesPage'               ,icon:'ios-help-buoy'},  //ios-help-buoy
      {title: 'page.finances.title'     , component: 'FinancesPage'                 ,icon:'md-cash'},        //md-cash
      {title: 'page.profile.title'      , component: 'ProfilePage'                  ,icon:'md-finger-print'},//md-finger-print
      {title: 'page.logout'             , component: 'LoginPage', method: 'logout'  ,icon:'md-log-out'}      //md-log-out
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {

    if (page.method && page.method === 'logout') {
      this.authService.logout();
    }

    this.nav.setRoot(page.component);
  }
}
