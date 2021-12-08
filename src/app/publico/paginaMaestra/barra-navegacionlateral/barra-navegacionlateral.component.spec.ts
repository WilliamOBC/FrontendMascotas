import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavegacionlateralComponent } from './barra-navegacionlateral.component';

describe('BarraNavegacionlateralComponent', () => {
  let component: BarraNavegacionlateralComponent;
  let fixture: ComponentFixture<BarraNavegacionlateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraNavegacionlateralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraNavegacionlateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
