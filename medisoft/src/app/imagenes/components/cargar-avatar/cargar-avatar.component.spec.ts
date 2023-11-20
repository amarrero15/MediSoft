import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarAvatarComponent } from './cargar-avatar.component';

describe('CargarAvatarComponent', () => {
  let component: CargarAvatarComponent;
  let fixture: ComponentFixture<CargarAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
