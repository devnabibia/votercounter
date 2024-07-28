import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {TranslateService} from '@ngx-translate/core';

import * as italian from './i18n/it.json';

import {HomePage} from '../pages/home/home';
import {Seggio} from "./domain/Seggio";
import {Storage} from "@ionic/storage";

import {Subscription} from 'rxjs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  onResume: Subscription;
  onPause: Subscription;

  rootPage: any = HomePage;

  seggi: Array<Seggio> = [];
  seggioCorrente: Seggio;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, translate: TranslateService, storage: Storage) {
    this.initializeApp(storage);

    // used for an example of ngFor and navigation
    translate.setDefaultLang('it');

    translate.setTranslation('it', italian);

    translate.use('it');

    this.onResume = platform.resume.subscribe(() => {
      storage.get('seggi').then(value => {
        this.seggi = [].concat(value);
      });
    });

    this.onPause = platform.pause.subscribe(() => {
      storage.set('seggi', this.seggi);
    });
  }

  initializeApp(storage: Storage) {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      storage.get('seggi').then(value => {
        this.seggi = [].concat(value);

        this.statusBar.styleDefault();
        this.splashScreen.hide();
      }, () => {
        this.seggi = [];
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    });
  }

  setSeggioCorrente(seggio) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.seggioCorrente = seggio;
  }
}
