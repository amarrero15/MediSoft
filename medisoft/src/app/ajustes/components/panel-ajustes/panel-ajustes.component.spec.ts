import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAjustesComponent } from './panel-ajustes.component';

describe('PanelAjustesComponent', () => {
  let component: PanelAjustesComponent;
  let fixture: ComponentFixture<PanelAjustesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelAjustesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelAjustesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
