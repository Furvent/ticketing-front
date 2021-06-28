import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTicketsListComponent } from './all-tickets-list.component';

describe('AllTicketsListComponent', () => {
  let component: AllTicketsListComponent;
  let fixture: ComponentFixture<AllTicketsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTicketsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTicketsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
