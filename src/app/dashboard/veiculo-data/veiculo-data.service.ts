import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { VeiculosDatasAPI } from './veiculo-data';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class VeiculoDataService {

  constructor(private http: HttpClient) { }

  getVeiculosData(){
    const veiculosDataApi = this.http.get<VeiculosDatasAPI>(`${API}/vehicleData`);

    return veiculosDataApi;
  }


}