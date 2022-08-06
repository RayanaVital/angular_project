import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VeiculosAPI, VeiculosDatasAPI } from './veiculos';

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  constructor(private http: HttpClient) { }

  getVeiculos(){
    return this.http.get<VeiculosAPI>(`${API}/vehicle`);
  }

  //get de veiculos data, preciso fazer um switchMap para pegar o id do veiculo selecionado ??
  //preciso olhar o model de veiculosData para fazer outra inteface ??

  getVeiculosData(){
    const veiculosDataApi = this.http.get<VeiculosDatasAPI>(`${API}/vehicleData`);
    console.log('veiculosDataApi', veiculosDataApi);
    return veiculosDataApi;
  }


}
