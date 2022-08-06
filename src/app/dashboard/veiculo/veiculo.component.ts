import { Component, OnInit } from '@angular/core';
import { Veiculos, Veiculo } from './veiculo';
import { VeiculoService } from './veiculo.service';

const API = 'http://localhost:3000/vehicle';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.scss']
})
export class VeiculoComponent implements OnInit {


  veiculos: Veiculos = [];

  veiculoSelecionado!: Veiculo;

  constructor(private veiculosService: VeiculoService) { }

  ngOnInit(): void {

     this.veiculosService.getVeiculos()
      .subscribe({
        next: (resp) => {
          console.log(resp);
          this.veiculos = resp.vehicles;
          this.veiculoSelecionado = this.veiculos[0];
        }
      });
  }

  //Obtem o nome da imagen através do veiculoSelecionado.vehicle
  getImagemVeiculo ({ vehicle }: Veiculo): string {
    const nomeImagem = vehicle
    .toLowerCase()
    .replace(' ', '_');

    const prefix = 'assets/img/';

    const sufix = '.png';

    return prefix + nomeImagem + sufix;

  };

}
