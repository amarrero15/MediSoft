import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasPageComponent } from './consultas-page.component';

describe('ConsultasPageComponent', () => {
  let component: ConsultasPageComponent;
  let fixture: ComponentFixture<ConsultasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultasPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
