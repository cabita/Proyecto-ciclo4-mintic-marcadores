import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDeportesComponent } from './listar-deportes.component';

describe('ListarDeportesComponent', () => {
  let component: ListarDeportesComponent;
  let fixture: ComponentFixture<ListarDeportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarDeportesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarDeportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
