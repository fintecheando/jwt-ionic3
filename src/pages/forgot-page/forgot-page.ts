import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../providers/auth-service';


@IonicPage()
@Component({
  selector: 'page-forgot-page',
  templateUrl: 'forgot-page.html',
})
export class ForgotPage {

  private forgotData: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public storage: Storage,
    public formBuilder: FormBuilder,
    public authService: AuthService) {

    this.forgotData = this.formBuilder.group({
      //egn: ['', Validators.compose([Validators.required, Validators.minLength(10), , Validators.maxLength(10)])],
      username: ['', Validators.compose([Validators.required])],  
      email: ['', Validators.required]
      
    });

  }

  ionViewDidLoad() {
    //hide menu when on the login page, regardless of the screen resolution
    this.menuCtrl.enable(false);
  }
  
  forgot() {
    
    this.authService.forgot(this.forgotData.value)
      .then(() => this.navCtrl.setRoot('LoginPage'))
      .catch(e => console.log("registration error", e));         
  }

}
