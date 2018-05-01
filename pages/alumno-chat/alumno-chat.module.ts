import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlumnoChatPage } from './alumno-chat';

@NgModule({
  declarations: [
    AlumnoChatPage,
  ],
  imports: [
    IonicPageModule.forChild(AlumnoChatPage),
  ],
})
export class AlumnoChatPageModule {}
