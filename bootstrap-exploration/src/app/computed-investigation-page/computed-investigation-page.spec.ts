import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedInvestigationPage } from './computed-investigation-page';

describe('ComputedInvestigationPage', () => {
  let component: ComputedInvestigationPage;
  let fixture: ComponentFixture<ComputedInvestigationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedInvestigationPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ComputedInvestigationPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
