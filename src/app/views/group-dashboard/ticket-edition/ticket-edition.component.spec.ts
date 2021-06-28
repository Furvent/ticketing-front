import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketEditionComponent } from './ticket-edition.component';

describe('TicketEditionComponent', () => {
  let component: TicketEditionComponent;
  let fixture: ComponentFixture<TicketEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
