import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SginInForm } from './sgin-in-form';

describe('SginInForm', () => {
  let component: SginInForm;
  let fixture: ComponentFixture<SginInForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SginInForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SginInForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
