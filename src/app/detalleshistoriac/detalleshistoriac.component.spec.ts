import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleshistoriacComponent } from './detalleshistoriac.component';

describe('DetalleshistoriacComponent', () => {
  let component: DetalleshistoriacComponent;
  let fixture: ComponentFixture<DetalleshistoriacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleshistoriacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleshistoriacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
