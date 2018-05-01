import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { TeacherProfilePage } from '../teacher-profile/teacher-profile';
// import { StatusBar, Keyboard } from '@ionic-native'; 


/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, platform:Platform) {
  	// platform.ready().then(() => {
  	// 	Keyboard.disableScroll(true)
  	// 	StatusBar.styleDefault();
  	// });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

teacherProfile(){
  this.navCtrl.push(TeacherProfilePage);
}

}
