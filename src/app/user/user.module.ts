import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';

import { UserComponent } from './components/user/user.component';
import { OwlModule } from 'ngx-owl-carousel';



@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    OwlModule
  ]
})
export class UserModule { }
