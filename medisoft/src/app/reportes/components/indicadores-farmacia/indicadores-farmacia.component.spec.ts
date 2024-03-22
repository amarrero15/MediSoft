import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadoresFarmaciaComponent } from './indicadores-farmacia.component';

describe('IndicadoresFarmaciaComponent', () => {
  let component: IndicadoresFarmaciaComponent;
  let fixture: ComponentFixture<IndicadoresFarmaciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicadoresFarmaciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicadoresFarmaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
