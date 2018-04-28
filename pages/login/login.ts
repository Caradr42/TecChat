import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';

// try
// tabs
import { FavoritesPage } from '../favorites/favorites';
import { GroupsPage } from '../groups/groups';
import { RecentsPage } from '../recents/recents';
import { ClassesPage } from '../classes/classes';
// chat
import { ChatPage } from '../chat/chat';
import { PhoneCallPage } from '../phone-call/phone-call';
// profiles
import { ProfilePage } from '../profile/profile';
import { TeacherProfilePage } from '../teacher-profile/teacher-profile';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

   @ViewChild('email') email;
   @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signInUser(){
  	console.log('would you sign in with ', this.email.value, this.password.value);
    this.navCtrl.push(HomePage);
  }

  register(){
  	this.navCtrl.push(RegisterPage);
  }

//  tries
//   chat(){
//     this.navCtrl.push(ChatPage);
//   }


// fav(){
//     this.navCtrl.push(FavoritesPage);
//   }

// gr(){
//     this.navCtrl.push(GroupsPage);
//   }

// cl(){
//     this.navCtrl.push(ClassesPage);
//   }

// rec(){
//     this.navCtrl.push(RecentsPage);
//   }

// pc(){
//     this.navCtrl.push(PhoneCallPage);
//   }

// pr(){
//     this.navCtrl.push(ProfilePage);
//   }

// tpr(){
//     this.navCtrl.push(TeacherProfilePage);
//   }




}
