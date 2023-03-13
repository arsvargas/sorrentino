import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorVoceComponent } from './por-voce.component';

describe('PorVoceComponent', () => {
  let component: PorVoceComponent;
  let fixture: ComponentFixture<PorVoceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorVoceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorVoceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
