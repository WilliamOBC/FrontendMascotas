import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearVisitasComponent } from './crear-visitas.component';

describe('CrearVisitasComponent', () => {
  let component: CrearVisitasComponent;
  let fixture: ComponentFixture<CrearVisitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearVisitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearVisitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
