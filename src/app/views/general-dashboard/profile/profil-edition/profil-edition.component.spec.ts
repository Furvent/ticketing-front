import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilEditionComponent } from './profil-edition.component';

describe('ProfilEditionComponent', () => {
  let component: ProfilEditionComponent;
  let fixture: ComponentFixture<ProfilEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
