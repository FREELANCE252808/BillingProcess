using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Helpers
{
    public class MessageConstant
    {
        public static string RecordAdded = "Record added successfully!";
        public static string FailedToAddRecord = "Failed to add record";

        public static string RecordUpdated = "Record updated successfully!";
        public static string FailedToUpdateRecord = "Failed to update record";

        public static string RecordDeleted = "Record deleted successfully!";
        public static string FailedToDeleteRecord = "Failed to delete record";

        public static string Success = "S";
        public static string Error = "E";
        public static string Worning = "W";
        public static string Duplicate = "D";
        public static string FKCONSTRAINT = "FK";

        public static string EnterUserID = "Please enter valid email id.";
        public static string Something_went_wrong = "Something went wrong.";
        public static string Password_changed_successfully = "Password changed successfully.";
        public static string Password_changed_successfully_But_EmailFailed = "Password changed successfully.but failed to send email.";
        public static string BadRequest = "Bad request.";
        public static string InValidOldPwd = "Invalid old password.";
        public static string OldPwdNewPwdSame = "Old password and new password both are same.";

        public static string PasswordSentToEmailID = "Your password has been sent to your email id.  Please Check";

        public static string FailedToSentEmail = "Failed to send email.";

        public static string RecordIsInUse = "Record is in use, cannot be deleted!";

        public static string RecordAlreadyExists = "{0} already exists!";
    }
}
