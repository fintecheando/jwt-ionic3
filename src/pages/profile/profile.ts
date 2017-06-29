import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProtectedPage } from '../protected-page/protected-page';
import { Storage } from '@ionic/storage';
//import { UserProfilePage } from '../user-profile-page/user-profile';
//import { List1Page } from '../list-1/list-1';
//import { List2Page } from '../list-2/list-2';
//import { GridPage } from '../grid/grid';
//import { NotificationsPage } from '../notifications/notifications';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage extends ProtectedPage {
  items: Array<{title: string, note?: string, component: any, icon: string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    super(navCtrl, navParams, storage);
    this.items = [
      { title: 'Mis datos personales'                  , component: 'UserProfilePage'   , icon: 'md-person' },
      { title: 'Métodos de pago'       , note: ''      , component: 'List1Page'         , icon: 'md-card' },  //md-card
      { title: 'Restablecer contraseña', note: ''      , component: 'List2Page'         , icon: 'md-lock' },
      { title: 'Firma electrónica'                     , component: 'GridPage'          , icon: 'md-home' }
    ];
  }


  itemTapped(event, item) {
    this.navCtrl.push(item.component);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad MyAccountPage');
  }

}