import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projectcardsection } from './projectcardsection';

describe('Projectcardsection', () => {
  let component: Projectcardsection;
  let fixture: ComponentFixture<Projectcardsection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projectcardsection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Projectcardsection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
