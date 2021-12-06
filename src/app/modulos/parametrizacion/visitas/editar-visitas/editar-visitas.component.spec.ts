import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVisitasComponent } from './editar-visitas.component';

describe('EditarVisitasComponent', () => {
  let component: EditarVisitasComponent;
  let fixture: ComponentFixture<EditarVisitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarVisitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarVisitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
