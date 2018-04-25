import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser(){
  	console.log('Would you register with ', this.username.value, this.email.value, this.password.value);
  }

   signIn(){
  	// this.navCtrl.push(LoginPage);
  	this.navCtrl.pop();
  }

}
