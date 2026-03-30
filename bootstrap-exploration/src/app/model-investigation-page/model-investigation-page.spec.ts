import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelInvestigationPage } from './model-investigation-page';

describe('ModelInvestigationPage', () => {
  let component: ModelInvestigationPage;
  let fixture: ComponentFixture<ModelInvestigationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelInvestigationPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ModelInvestigationPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
