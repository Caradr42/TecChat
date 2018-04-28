import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { FavoritesPage } from '../favorites/favorites';
import { GroupsPage } from '../groups/groups';
import { RecentsPage } from '../recents/recents';
import { ClassesPage } from '../classes/classes';

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

  signIn(){
  	this.navCtrl.push(LoginPage);
  }

  RecentsRoot = RecentsPage;
  FavoritesRoot = FavoritesPage;
  ClassesRoot = ClassesPage;
  GroupsRoot = GroupsPage;


}
