import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { VeiculosDatas, VeiculoData, VeiculosDatasAPI } from './veiculo-data';
import { VeiculoDataService } from './veiculo-data.service';
import {tap, debounceTime, distinctUntilChanged, switchMap, filter, mergeWith} from 'rxjs/operators';

const ESPERA_DIGITACAO = 300;

@Component({
  selector: 'app-veiculo-data',
  templateUrl: './veiculo-data.component.html',
  styleUrls: ['./veiculo-data.component.scss']
})
export class VeiculoDataComponent {

  veiculoInput = new FormControl();


  todosVeiculos$ = this.veiculoDataService.getVeiculosData().pipe(
    tap(() => {
      console.log('Fluxo Inicial');
    })
  );

  filtroPeloInput$ = this.veiculoInput.valueChanges.pipe(
    debounceTime(ESPERA_DIGITACAO),
    tap(() => {
      console.log('Fluxo do Filtro');
    }),
    tap(console.log),
    filter(
      (valorDigitado) => valorDigitado.length >= 3 || !valorDigitado.length
    ),
    distinctUntilChanged(),
    switchMap((valorDigitado) => this.veiculoDataService.getVeiculosData(valorDigitado)),
    tap(console.log)
  );

  veiculosDatas$ = mergeWith(this.todosVeiculos$, this.filtroPeloInput$);



  constructor(private veiculoDataService: VeiculoDataService) { }



}


