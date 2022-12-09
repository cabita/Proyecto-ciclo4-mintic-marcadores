import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDeporteComponent } from './crear-deporte.component';

describe('CrearDeporteComponent', () => {
  let component: CrearDeporteComponent;
  let fixture: ComponentFixture<CrearDeporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearDeporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearDeporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
