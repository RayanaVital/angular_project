import { tap, map} from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { VeiculosDatas, VeiculosDatasAPI } from './veiculo-data';
import { Observable } from 'rxjs';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class VeiculoDataService {

  constructor(private http: HttpClient) { }

  getVeiculosData(valorDigitado?: string): Observable<VeiculosDatas> {
    const params = valorDigitado
      ? new HttpParams().append('valor', valorDigitado)
      : undefined;

    const veiculosDatas = this.http.get<VeiculosDatasAPI>(`${API}/vehicleData`,{ params })
    .pipe(
      tap((valor)=> console.log(valor)),
      map((api : VeiculosDatasAPI) => api.vehicleData)
    )

    return veiculosDatas;
  }
}
