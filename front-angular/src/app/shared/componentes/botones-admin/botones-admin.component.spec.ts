import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesAdminComponent } from './botones-admin.component';

describe('BotonesAdminComponent', () => {
  let component: BotonesAdminComponent;
  let fixture: ComponentFixture<BotonesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
