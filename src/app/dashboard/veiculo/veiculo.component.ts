import { Component } from '@angular/core';
import { Veiculo } from './veiculo';
import { VeiculoService } from './veiculo.service';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.scss']
})
export class VeiculoComponent  {

  veiculos$ = this.veiculosService.getVeiculos();

  veiculoSelecionado!: Veiculo ;

  constructor(private veiculosService: VeiculoService) { }

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
