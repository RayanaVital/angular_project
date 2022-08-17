import { tap, map} from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { VeiculosDatasAPI } from './veiculo-data';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class VeiculoDataService {

  constructor(private http: HttpClient) { }

  getVeiculosData(valorDigitado?: string) {
    const params = valorDigitado
      ? new HttpParams().append('valor', valorDigitado)
      : undefined;

    const veiculosDataApi = this.http.get<VeiculosDatasAPI>(`${API}/vehicleData`,{ params })
    .pipe(
      tap((valor)=> console.log(valor)),
      map(api => api.vehicleData)
    )

    return veiculosDataApi;
  }



}
