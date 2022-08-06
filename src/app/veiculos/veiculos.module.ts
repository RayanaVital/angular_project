import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeiculosRoutingModule } from './veiculos-routing.module';
import { VeiculoComponent } from './veiculo/veiculo.component';
import { VeiculoDataComponent } from './veiculo-data/veiculo-data.component';


@NgModule({
  declarations: [
    VeiculoComponent,
    VeiculoDataComponent
  ],
  imports: [
    CommonModule,
    VeiculosRoutingModule,
  ]
})
export class VeiculosModule { }
