import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectInvestigationPage } from './effect-investigation-page';

describe('EffectInvestigationPage', () => {
  let component: EffectInvestigationPage;
  let fixture: ComponentFixture<EffectInvestigationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffectInvestigationPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EffectInvestigationPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
