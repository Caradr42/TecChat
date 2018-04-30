import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhoneCallPage } from './phone-call';

@NgModule({
  declarations: [
    PhoneCallPage,
  ],
  imports: [
    IonicPageModule.forChild(PhoneCallPage),
  ],
})
export class PhoneCallPageModule {}
