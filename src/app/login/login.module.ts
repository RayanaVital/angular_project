import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginAcessComponent } from './login-acess/login-acess.component';


@NgModule({
  declarations: [
    LoginComponent,
    LoginAcessComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
