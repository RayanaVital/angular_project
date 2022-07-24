import { MensagemModule } from './../componentes/mensagem/mensagem.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginAcessComponent } from './login-acess/login-acess.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    LoginAcessComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    MensagemModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
