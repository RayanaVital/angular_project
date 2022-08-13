import { Component, OnInit } from '@angular/core';
import { Veiculos, Veiculo } from './veiculo';
import { VeiculoService } from './veiculo.service';

const API = 'http://localhost:3000/vehicle';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.scss']
})
export class VeiculoComponent  {

  veiculos$ = this.veiculosService.getVeiculos();

  veiculos: Veiculos = [];

  veiculoSelecionado!: Veiculo ;

  constructor(private veiculosService: VeiculoService) { }

  // ngOnInit(): void {

  //   this.veiculosService.getVeiculos()
  //     .subscribe({
  //       next: (vehicles: Veiculos) => {
  //         console.log(vehicles);
  //         this.veiculos = vehicles;
  //         this.veiculoSelecionado = this.veiculos[0];
  //       }
  //     });
  // }

  //Obtem o nome da imagen através do veiculoSelecionado.vehicle
  getImagemVeiculo (veiculo: Veiculo): string {
    if (!veiculo) return '';

    const { vehicle } = veiculo;
    const nomeImagem = vehicle
    .toLowerCase()
    .replace(' ', '_');

    const prefix = 'assets/img/';

    const sufix = '.png';

    return prefix + nomeImagem + sufix;

  };

}
