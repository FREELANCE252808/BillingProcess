import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveChargesComponent } from './move-charges.component';

describe('MoveChargesComponent', () => {
  let component: MoveChargesComponent;
  let fixture: ComponentFixture<MoveChargesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveChargesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
