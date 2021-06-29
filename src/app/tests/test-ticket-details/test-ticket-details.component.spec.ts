import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTicketDetailsComponent } from './test-ticket-details.component';

describe('TestTicketDetailsComponent', () => {
  let component: TestTicketDetailsComponent;
  let fixture: ComponentFixture<TestTicketDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestTicketDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTicketDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
