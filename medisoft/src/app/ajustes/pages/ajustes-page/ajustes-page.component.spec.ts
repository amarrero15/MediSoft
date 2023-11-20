import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustesPageComponent } from './ajustes-page.component';

describe('AjustesPageComponent', () => {
  let component: AjustesPageComponent;
  let fixture: ComponentFixture<AjustesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjustesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjustesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
