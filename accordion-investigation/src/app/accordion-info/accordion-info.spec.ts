import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionInfo } from './accordion-info';

describe('AccordionInfo', () => {
  let component: AccordionInfo;
  let fixture: ComponentFixture<AccordionInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
