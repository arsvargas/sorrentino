import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitacoesComponent } from './citacoes.component';

describe('CitacoesComponent', () => {
  let component: CitacoesComponent;
  let fixture: ComponentFixture<CitacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
