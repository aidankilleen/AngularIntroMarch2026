import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditorForm } from './user-editor-form';

describe('UserEditorForm', () => {
  let component: UserEditorForm;
  let fixture: ComponentFixture<UserEditorForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserEditorForm],
    }).compileComponents();

    fixture = TestBed.createComponent(UserEditorForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
