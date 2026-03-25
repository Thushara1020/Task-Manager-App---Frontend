import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tashform } from './tashform';

describe('Tashform', () => {
  let component: Tashform;
  let fixture: ComponentFixture<Tashform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tashform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tashform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
