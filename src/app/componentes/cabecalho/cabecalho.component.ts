import { Router } from '@angular/router';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent {

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  user$ = this.usuarioService.retornaUsuario();

  estaLogado = () => {
    return this.usuarioService.estaLogado();
  };

  logout(){
    this.usuarioService.logout();
    this.router.navigate(['']);
  }



}
