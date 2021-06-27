import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingServicesComponent } from './testing-services.component';

describe('TestingServicesComponent', () => {
  let component: TestingServicesComponent;
  let fixture: ComponentFixture<TestingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
