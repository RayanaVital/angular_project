import { Component, OnInit } from '@angular/core';
import { VeiculosDatas, VeiculoData } from './veiculo-data';
import { VeiculoDataService } from './veiculo-data.service';

@Component({
  selector: 'app-veiculo-data',
  templateUrl: './veiculo-data.component.html',
  styleUrls: ['./veiculo-data.component.scss']
})
export class VeiculoDataComponent implements OnInit {


  veiculosDatas: VeiculosDatas = [];

  veiculoDataSelecionado: Partial<VeiculoData> = {};

  textoBuscaVin!: string;


  constructor(private veiculoDataService: VeiculoDataService) { }

  ngOnInit(): void {

     this.veiculoDataService.getVeiculosData()
      .subscribe({
        next: (resp) => {
          console.log(resp);
          this.veiculosDatas = resp.vehicleData;
        }
      });
  }

   getVeiculoData(textoBuscaVin: string) {
    if (textoBuscaVin.length != 20) return;

    const result = this.veiculosDatas.find(veiculoData => veiculoData.vin === textoBuscaVin);

    if (!result) {
      this.veiculoDataSelecionado = {};
      return;
    }

    this.veiculoDataSelecionado = result;
  }

  //  this.obs=this.mform.valueChanges
  //     .pipe(
  //       debounceTime(500),
  //       switchMap(id => {

  //         console.log(id)
  //         return this.http.get(url)

  //       })
  //     )
  //     .subscribe(data => console.log(data));
  // }





}


