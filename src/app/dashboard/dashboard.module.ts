import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { VeiculoComponent } from './veiculo/veiculo.component';
import { VeiculoDataComponent } from './veiculo-data/veiculo-data.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    VeiculoComponent,
    VeiculoDataComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,


  ]
})
export class DashboardModule { }
