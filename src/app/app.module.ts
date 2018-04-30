import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
// tabs
import { FavoritesPage } from '../pages/favorites/favorites';
import { GroupsPage } from '../pages/groups/groups';
import { RecentsPage } from '../pages/recents/recents';
import { ClassesPage } from '../pages/classes/classes';
// chat
import { ChatPage } from '../pages/chat/chat';
import { PhoneCallPage } from '../pages/phone-call/phone-call';
// profiles
import { ProfilePage } from '../pages/profile/profile';
import { TeacherProfilePage } from '../pages/teacher-profile/teacher-profile';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    FavoritesPage,
    GroupsPage,
    RecentsPage,
    ClassesPage,
    ChatPage,
    PhoneCallPage,
    ProfilePage,
    TeacherProfilePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    FavoritesPage,
    GroupsPage,
    RecentsPage,
    ClassesPage,
    ChatPage,
    PhoneCallPage,
    ProfilePage,
    TeacherProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

