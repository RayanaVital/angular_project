import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VeiculosAPI, Veiculos } from './veiculo';
import {tap, map} from 'rxjs/operators';
import { Observable } from 'rxjs';


const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  constructor(private http: HttpClient) { }

  getVeiculos(): Observable<Veiculos>{
    return this.http.get<VeiculosAPI>(`${API}/vehicle`)
    .pipe(
      tap((api) => console.log({api})),
      map((api : VeiculosAPI) => api.vehicles)
    );
  }
}
