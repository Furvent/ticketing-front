import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommentInputComponent } from './add-comment-input.component';

describe('AddCommentInputComponent', () => {
  let component: AddCommentInputComponent;
  let fixture: ComponentFixture<AddCommentInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCommentInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommentInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
