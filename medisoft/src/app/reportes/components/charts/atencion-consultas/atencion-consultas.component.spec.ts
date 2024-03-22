import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtencionConsultasComponent } from './atencion-consultas.component';

describe('AtencionConsultasComponent', () => {
  let component: AtencionConsultasComponent;
  let fixture: ComponentFixture<AtencionConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtencionConsultasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtencionConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
