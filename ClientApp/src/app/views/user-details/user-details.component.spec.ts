import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsComponent } from './user-details.component';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



{
  "userId": 1,
  "firstName": "Bipin",
  "lastName": "Singh",
  "isAdmin": true,
  "isActive": true,
  "userName": "admin",
  "password": "Q/Iykc7D/qLZUhdiCWeWzg==",
  "userCompanyList": [
  {
  "companyName": "Microsoft",
  "companyCode": "MS"
  },
  {
  "companyName": "Apple",
  "companyCode": "APP"
  }
