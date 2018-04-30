import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

   @ViewChild('username') username;
   @ViewChild('email') email;
   @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public events: Events) {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  signIn(){
  	// this.navCtrl.push(LoginPage);
  	this.navCtrl.pop();
  }

  registerUser() {
    console.log('Would you register with ', this.username.value, this.email.value, this.password.value);
    // alert
    let alert = this.alertCtrl.create({
      title: 'Confirmar Email',
      subTitle: 'Favor de confirmar su cuenta en su correo institucional.',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
          let navTransition = alert.dismiss();
          
            navTransition.then(() => {
              this.navCtrl.pop();
           
          });
          return false;
        }
      }
      ]
    });
    alert.present();

   }
}







