import { TestBed } from '@angular/core/testing';

import { VeiculoService } from './veiculo.service';

describe('VeiculosService', () => {
  let service: VeiculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeiculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
