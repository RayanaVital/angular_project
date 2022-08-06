import { UsuarioService } from './../autenticacao/usuario/usuario.service';
import { VeiculosService } from './../veiculos/veiculos.service';
import { switchMap, tap } from 'rxjs/operators';
import { Veiculo, VeiculoData, Veiculos, VeiculosDatas } from './../veiculos/veiculos';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  veiculos: Veiculos = [];

  veiculoSelecionado!: Veiculo;

  veiculosDatas: VeiculosDatas = [];

  veiculoDataSelecionado: Partial<VeiculoData> = {};

  textoBuscaVin!: string;

  constructor(private veiculosService: VeiculosService) { }

  ngOnInit(): void {

     this.veiculosService.getVeiculos()
      .subscribe({
        next: (resp) => {
          console.log(resp);
          this.veiculos = resp.vehicles;
          this.veiculoSelecionado = this.veiculos[0];
        }
      })

     this.veiculosService.getVeiculosData()
      .subscribe({
        next: (resp) => {
          console.log(resp);
          this.veiculosDatas = resp.vehicleData;
        }
      })
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

  getVeiculoData(textoBuscaVin: string) {
    if (textoBuscaVin.length != 20) return;

    const result = this.veiculosDatas.find(veiculoData => veiculoData.vin === textoBuscaVin);

    if (!result) {
      this.veiculoDataSelecionado = {};
      return;
    }

    this.veiculoDataSelecionado = result;
  }

}
