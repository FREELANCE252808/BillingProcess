export class UserDetails {
  firstName: string;
  lastName: string;
  userName: string;
  userId: number;
  password: string;
  isAdmin: boolean;
  isActive: boolean;
  userCompanyList: any[];

  constructor(){
    this.firstName="";
    this.lastName="";
    this.userName="";
    this.userId=0;
    this.password="";
    this.isAdmin=false
    this.isActive = true;
    this.userCompanyList=[];
  }
}


