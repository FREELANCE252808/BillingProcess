export class ChangePasswordModel  {
  userId:number=0;
  newPassword:string= '';
  confirmNewPassword:string= ''

  Clear(){
    this.userId=0;
    this.newPassword='';
    this.confirmNewPassword='';
  }
}


