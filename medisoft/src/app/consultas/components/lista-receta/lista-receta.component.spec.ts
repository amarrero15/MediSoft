import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRecetaComponent } from './lista-receta.component';

describe('ListaRecetaComponent', () => {
  let component: ListaRecetaComponent;
  let fixture: ComponentFixture<ListaRecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRecetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
