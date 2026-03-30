import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsInvestigation } from './reactive-forms-investigation';

describe('ReactiveFormsInvestigation', () => {
  let component: ReactiveFormsInvestigation;
  let fixture: ComponentFixture<ReactiveFormsInvestigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsInvestigation],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsInvestigation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
