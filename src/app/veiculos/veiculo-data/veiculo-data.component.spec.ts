import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoDataComponent } from './veiculo-data.component';

describe('VeiculoDataComponent', () => {
  let component: VeiculoDataComponent;
  let fixture: ComponentFixture<VeiculoDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculoDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeiculoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
