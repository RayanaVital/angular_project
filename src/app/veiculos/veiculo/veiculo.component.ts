import { Component, OnInit } from '@angular/core';

const API = 'http://localhost:3000/vehicle';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.scss']
})
export class VeiculoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
