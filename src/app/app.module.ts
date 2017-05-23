import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import {AngularFireModule,FirebaseListObservable,AuthMethods,AuthProviders} from 'angularfire2';

import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';

export const firebaseConfig = {
    apiKey: "AIzaSyDtqWRhCPeRN2jzzBxxTiFPvx3hT2Llcl4",
    authDomain: "kitkatandcracker.firebaseapp.com",
    databaseURL: "https://kitkatandcracker.firebaseio.com",
    projectId: "kitkatandcracker",
    storageBucket: "kitkatandcracker.appspot.com",
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
