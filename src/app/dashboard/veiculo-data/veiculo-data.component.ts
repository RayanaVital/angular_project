import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { VeiculosDatas } from './veiculo-data';
import { VeiculoDataService } from './veiculo-data.service';
import {tap, debounceTime, distinctUntilChanged, switchMap, filter, mergeWith} from 'rxjs/operators';
import { Observable } from 'rxjs';

const ESPERA_DIGITACAO = 300;

@Component({
  selector: 'app-veiculo-data',
  templateUrl: './veiculo-data.component.html',
  styleUrls: ['./veiculo-data.component.scss']
})
export class VeiculoDataComponent {

  constructor(private veiculoDataService: VeiculoDataService) { }

  veiculoInput = new FormControl();

  filtroPeloInput$ : Observable<VeiculosDatas> = this.veiculoInput.valueChanges.pipe(
    debounceTime(ESPERA_DIGITACAO),
    tap(() => {
      console.log('Fluxo do Filtro');
    }),
    filter(
      (valorDigitado) => valorDigitado.length >= 3
    ),
    distinctUntilChanged(),
    switchMap((valorDigitado: string) => this.veiculoDataService.getVeiculosData(valorDigitado)),
    tap(console.log)
  );
}


