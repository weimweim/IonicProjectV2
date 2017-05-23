import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
	pushPage;
  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.pushPage = TabsPage;
  	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
