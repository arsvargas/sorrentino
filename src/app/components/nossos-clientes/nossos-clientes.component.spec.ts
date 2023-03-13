import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossosClientesComponent } from './nossos-clientes.component';

describe('NossosClientesComponent', () => {
  let component: NossosClientesComponent;
  let fixture: ComponentFixture<NossosClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NossosClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NossosClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
