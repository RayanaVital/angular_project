import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-acess',
  templateUrl: './login-acess.component.html',
  styleUrls: ['./login-acess.component.scss']
})
export class LoginAcessComponent implements OnInit {

  usuario = '';
  senha = '';

  constructor(private authService: AutenticacaoService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.autenticar(this.usuario, this.senha).subscribe(() => {
    console.log('Login realizado com sucesso')
    },(error) => {
      alert('Erro ao realizar login');
      console.log(error);
    });
 }

}
