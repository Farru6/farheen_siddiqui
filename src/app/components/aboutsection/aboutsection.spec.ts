import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutsection } from './aboutsection';

describe('Aboutsection', () => {
  let component: Aboutsection;
  let fixture: ComponentFixture<Aboutsection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aboutsection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aboutsection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
