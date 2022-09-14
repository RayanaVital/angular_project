import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-acess',
  templateUrl: './login-acess.component.html',
  styleUrls: ['./login-acess.component.scss']
})
export class LoginAcessComponent implements OnInit {

  usuario = '';
  senha = '';

  constructor(private authService: AutenticacaoService, private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

 login(){
    this.authService.autenticar(this.usuario, this.senha).subscribe(() => {
      this.router.navigate(['/home']);
      (error:Error) => {
        alert('Erro ao realizar login');
        console.log(error);
      }
    }) ;
  }

}
