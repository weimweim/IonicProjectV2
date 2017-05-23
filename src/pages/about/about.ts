import { Component } from '@angular/core';

import { NavController,AlertController } from 'ionic-angular';

import { ToastController } from 'ionic-angular';

import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

	//cakeAdds: FirebaseListObservable<any>;

   constructor(public toastCtrl: ToastController) { }
   	//this.cakeAdds = angFire.database.list('/addCake');

   // MESSAGE WHEN CLICK
    showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Crumble Cake : 500 BAHT',
      duration: 2000,
      position: position
    });

      toast.present(toast);
  	}

  	showToast2(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Wedding Cake : 2000 BAHT',
      duration: 2000,
      position: position
    });

      toast.present(toast);
  	}

  	showToast3(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Princess Cake : 600 BAHT',
      duration: 2000,
      position: position
    });

      toast.present(toast);
  	}

  	showToast4(position: string) {
    let toast = this.toastCtrl.create({
      message: ' Gold Wedding Cake : 2500 BAHT',
      duration: 2000,
      position: position
    });

      toast.present(toast);
  	}

  	showToast5(position: string) {
    let toast = this.toastCtrl.create({
      message: ' Macaroon Melting Cake : 500 BAHT',
      duration: 2000,
      position: position
    });

      toast.present(toast);
  	}




}
