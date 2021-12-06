import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarVisitasComponent } from './eliminar-visitas.component';

describe('EliminarVisitasComponent', () => {
  let component: EliminarVisitasComponent;
  let fixture: ComponentFixture<EliminarVisitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarVisitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarVisitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
