import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient, private usuarioService: UsuarioService ) { }


  autenticar(userName:string, password: string): Observable<HttpResponse<any>>{
    return this.httpClient
      .post
        ('http://localhost:3000/user/login',
    {
      userName, password,
    },
     {observe: 'response'}
    )
      .pipe(
        tap((response) => {
          const acessToken = response.headers.get('x-access-token') ?? '';
          this.usuarioService.salvaToken(acessToken);
        })
      );
  }


}
