import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { LoadingController } from 'ionic-angular';
import { AngularFire,FirebaseListObservable} from 'angularfire2';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { TabsPage } from '../tabs/tabs';



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  	constructor(public navCtrl: NavController) {
  }

}
