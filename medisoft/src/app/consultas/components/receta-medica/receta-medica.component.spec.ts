import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaMedicaComponent } from './receta-medica.component';

describe('RecetaMedicaComponent', () => {
  let component: RecetaMedicaComponent;
  let fixture: ComponentFixture<RecetaMedicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetaMedicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
