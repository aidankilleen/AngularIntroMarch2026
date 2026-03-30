import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateValuePage } from './template-value-page';

describe('TemplateValuePage', () => {
  let component: TemplateValuePage;
  let fixture: ComponentFixture<TemplateValuePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateValuePage],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateValuePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
