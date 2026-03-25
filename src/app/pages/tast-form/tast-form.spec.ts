import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TastForm } from './tast-form';

describe('TastForm', () => {
  let component: TastForm;
  let fixture: ComponentFixture<TastForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TastForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TastForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
