import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VeiculosAPI } from './veiculo';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  constructor(private http: HttpClient) { }

  getVeiculos(){
    return this.http.get<VeiculosAPI>(`${API}/vehicle`);
  }


}
