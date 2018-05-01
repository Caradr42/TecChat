import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ProfilePage } from '../profile/profile';
import { TeacherProfilePage } from '../teacher-profile/teacher-profile';
import { ChatPage } from '../chat/chat';
import { AlumnoChatPage } from '../alumno-chat/alumno-chat';
import { GroupChatPage } from '../group-chat/group-chat';;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  posts: any;

  @ViewChild('email') email;
  @ViewChild('password') password;

   constructor(public navCtrl: NavController, public http: Http) {
 
    this.http.get('http://localhost:8080/posts/').map(res => res.json()).subscribe(data => {
        this.posts = data.data.children;
        // console.log(posts);
    });
  }
  
  items;

  // constructor() {
  //   this.initializeItems();
  // }

  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
      'Buenos Aires',
      'Cairo',
      'Dhaka'
       ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  profile(){
     this.navCtrl.push(ProfilePage);
  }

  teacherProfile(){
     this.navCtrl.push(TeacherProfilePage);
  }

  teacherChat(){
    this.navCtrl.push(ChatPage);
  }

  alumnoChat(){
    this.navCtrl.push(AlumnoChatPage);
  }

  groupChat(){
    this.navCtrl.push(GroupChatPage);
  }

  // RecentsRoot = RecentsPage;
  // FavoritesRoot = FavoritesPage;
  // ClassesRoot = ClassesPage;
  // GroupsRoot = GroupsPage;

}
