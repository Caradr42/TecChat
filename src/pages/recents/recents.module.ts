import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecentsPage } from './recents';

@NgModule({
  declarations: [
    RecentsPage,
  ],
  imports: [
    IonicPageModule.forChild(RecentsPage),
  ],
})
export class RecentsPageModule {}
