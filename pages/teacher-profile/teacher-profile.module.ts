import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherProfilePage } from './teacher-profile';

@NgModule({
  declarations: [
    TeacherProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherProfilePage),
  ],
})
export class TeacherProfilePageModule {}
