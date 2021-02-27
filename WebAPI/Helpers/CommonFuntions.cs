using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Helpers
{
    public static class CommonFuntions
    {
        public static string TransactionConString { get; set; }
        public static string GetEnumDescription(Enum value)
        {
            System.Reflection.FieldInfo fi = value.GetType().GetField(value.ToString());

            DescriptionAttribute[] attributes =
                (DescriptionAttribute[])fi.GetCustomAttributes(typeof(DescriptionAttribute), false);

            if (attributes != null && attributes.Length > 0)
                return attributes[0].Description;
            else
                return value.ToString();
        }

        public static bool SendEmailsAuthenticate(MailMessage message, EmailConfig dtEmailConfig, string UserEmailID)
        {
            bool sent = false;
            try
            {


                string WebAppSenderName = Convert.ToString(dtEmailConfig.AppAdmin);
                string dtEmailConfigData = dtEmailConfig.SMTPUserid;
                string smtpClientHost = Convert.ToString(dtEmailConfig.SmtpClientHost);
                string smtpPassword = DecryptString(Convert.ToString(dtEmailConfig.SMTPPassword));
                Boolean sslEnabled = Convert.ToBoolean(dtEmailConfig.SSLEnabled);
                if (dtEmailConfigData.Length == 0 || smtpClientHost.Length == 0 || WebAppSenderName.Length == 0)
                {
                    return false;
                    sent = false;
                }
                message.IsBodyHtml = true;
                //  message.Body = message.Body.Replace("#EmailBy#", SmarkWorkadminEmailPersonName);
                // message.Body = message.Body.Replace("#UserName#", Convert.ToString("LOGGENiNuSERnAME"));
                System.Net.Mail.MailAddress senderID = new System.Net.Mail.MailAddress(dtEmailConfigData, WebAppSenderName);
                message.Sender = senderID;
                message.DeliveryNotificationOptions = DeliveryNotificationOptions.OnFailure;
                message.From = senderID;
                ServicePointManager.ServerCertificateValidationCallback = delegate (object s, X509Certificate certificate, X509Chain chain, SslPolicyErrors sslPolicyErrors) { return true; };
                SmtpClient client = new SmtpClient(smtpClientHost);
                client.Credentials = new System.Net.NetworkCredential(dtEmailConfigData, smtpPassword);
                client.EnableSsl = sslEnabled;
                client.Send(message);
                sent = true;

            }
            catch (Exception ex)
            {
                string str = ex.Message;
                sent = false;
            }
            return sent;
        }

        public static Boolean SendEmailsWithAuthenticate(MailMessage message, EmailConfig dtEmailConfig, User loggedInUser)
        {
            bool sent = false;
            try
            {
                string loggedInUserName = Convert.ToString(loggedInUser.firstName) + " " + Convert.ToString(loggedInUser.lastName);

                Guid objGuid = new Guid();
                objGuid = Guid.NewGuid();
                String MessageID = "<" + objGuid.ToString() + ">";
                string host = "";
                String adminEmailPerson = Convert.ToString(dtEmailConfig.AppAdmin);
                String adminEmailID = "";
                String smtpClientHost = "";
                String smtpUserID = "";
                String smtpPassword = "";
                //if ((loggedInUser.EmailPassword != "" && loggedInUser.EmailPassword != null) && (loggedInUser.SMTPHost != null && loggedInUser.SMTPHost != ""))
                //{
                //    adminEmailID = Convert.ToString(loggedInUser.EmailId);
                //    smtpClientHost = loggedInUser.SMTPHost;
                //    smtpUserID = Convert.ToString(loggedInUser.EmailId);
                //    smtpPassword = DecryptString(Convert.ToString(loggedInUser.EmailPassword));
                //  //  host = "imap." + Convert.ToString(adminEmailID.Split('@')[1]);
                //}
                //else
                //{
                adminEmailID = dtEmailConfig.SMTPUserid;
                smtpClientHost = Convert.ToString(dtEmailConfig.SmtpClientHost);
                smtpUserID = Convert.ToString(dtEmailConfig.SMTPUserid);
                smtpPassword = DecryptString(Convert.ToString(dtEmailConfig.SMTPPassword));
                //  host = "imap." + Convert.ToString(adminEmailID.Split('@')[1]);
                // }



                Boolean sslEnabled = Convert.ToBoolean(dtEmailConfig.SSLEnabled);
                if (adminEmailID.Length == 0 || smtpClientHost.Length == 0 || smtpUserID.Length == 0)
                {
                    return false;
                }
                message.IsBodyHtml = true;
                message.Body = message.Body.Replace("#EmailBy#", adminEmailPerson);
                message.Body = message.Body.Replace("#UserName#", loggedInUserName);
                System.Net.Mail.MailAddress senderID = new System.Net.Mail.MailAddress(adminEmailID, adminEmailID);
                message.Sender = senderID;
                message.DeliveryNotificationOptions = DeliveryNotificationOptions.OnFailure;
                message.From = senderID;
                ServicePointManager.ServerCertificateValidationCallback = delegate (object s, X509Certificate certificate, X509Chain chain, SslPolicyErrors sslPolicyErrors) { return true; };
                SmtpClient client = new SmtpClient(smtpClientHost);
                client.Credentials = new System.Net.NetworkCredential(smtpUserID, smtpPassword);
                client.EnableSsl = sslEnabled;
                client.Send(message);
                sent = true;

            }
            catch (Exception ex)
            {
                sent = false;
            }
            return sent;
        }

        public static string GenerateRandomPassword(String prefix, int passwordLength)
        {
            char[] chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".ToCharArray();
            string randomPassword = string.Empty;
            String fixedPassword = string.Empty;
            Random random = new Random();
            if (prefix.Length >= 3)
                fixedPassword = prefix.Substring(0, 3) + "@" + random.Next(9);
            else
                fixedPassword = prefix + "@" + random.Next(9);
            if (passwordLength > fixedPassword.Length)
            {
                for (int i = 0; i < passwordLength - fixedPassword.Length; i++)
                {
                    int x = random.Next(1, chars.Length);
                    //Don't Allow Repetation of Characters
                    if (!randomPassword.Contains(chars.GetValue(x).ToString()))
                        randomPassword += chars.GetValue(x);
                    else
                        i--;
                }
            }
            return fixedPassword + randomPassword;
        }

        public static string GenerateRandomUserCode(String prefix, int userCodeLength)
        {
            char[] chars = "12345678910".ToCharArray();
            string randomUserCode = string.Empty;
            String fixedUsercode = "";
            Random random = new Random();
            if (prefix.Length >= 4)
                fixedUsercode = prefix.Substring(0, 4);
            else
                fixedUsercode = prefix;
            if (userCodeLength > fixedUsercode.Length)
            {
                for (int i = 0; i < userCodeLength - fixedUsercode.Length; i++)
                {
                    int x = random.Next(1, chars.Length);
                    //Don't Allow Repetation of Characters
                    if (!randomUserCode.Contains(chars.GetValue(x).ToString()))
                        randomUserCode += chars.GetValue(x);
                    else
                        i--;
                }
            }
            return fixedUsercode + randomUserCode;
        }

        public static String Encrypt(String text)
        {
            //return SymCrypto.Instance.Encrypt(text, "!@12qw ¦");
            return AESEncryption.Encrypt(text, "!@12qw ¦");
        }

        public static bool IsBaseString(string value)
        {
            if (string.IsNullOrEmpty(value))
            {
                return false;
            }
            return Regex.IsMatch(value, "^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$");

        }
        ///// <summary>
        ///// Decrypts the specified text.
        ///// </summary>
        ///// <param name="text">The text.</param>
        ///// <returns></returns>
        public static String Decrypt(String text)
        {
            //return SymCrypto.Instance.Decrypt(text, "!@12qw ¦");
            return AESEncryption.Decrypt(text, "!@12qw ¦");
        }

        ///// <summary>
        ///// Encrypts the specified text.
        ///// </summary>
        ///// <param name="text">The text.</param>
        ///// <returns></returns>
        //public static String Encrypt(String text)
        //{
        //    //return SymCrypto.Instance.Encrypt(text, "!@12qw ¦");
        //    return AESEncryption.Encrypt(text, "!@12qw ¦");
        //}
        /// <summary>
        /// Decrypts the string.
        /// </summary>
        /// <param name="encryptedString">The encrypted string.</param>
        /// <returns></returns>
        public static String DecryptString(String encryptedString)
        {
            String[] arrstr;
            try
            {
                if (IsBaseString(encryptedString))
                {
                    encryptedString = Decrypt(encryptedString);
                }
                else
                {
                    if (encryptedString.Contains("-"))
                    {
                        try
                        {
                            String[] arrEncryptedOne = encryptedString.Split('-');
                            encryptedString = arrEncryptedOne[0] + '-' + Decrypt(arrEncryptedOne[1]);
                        }
                        catch
                        {

                        }
                    }
                    else
                    {
                        arrstr = encryptedString.Split(' ');
                        encryptedString = "";
                        for (int i = 0; i < arrstr.Length; i++)
                        {
                            encryptedString += Decrypt(arrstr[i]) + (i == (arrstr.Length - 1) ? "" : " ");
                        }
                    }
                }

            }
            catch
            {
                if (encryptedString.Contains("-"))
                {
                    try
                    {
                        String[] arrEncryptedOne = encryptedString.Split('-');
                        encryptedString = arrEncryptedOne[0] + '-' + Decrypt(arrEncryptedOne[1]);
                    }
                    catch
                    {

                    }
                }
                else
                {
                    arrstr = encryptedString.Split(' ');
                    encryptedString = "";
                    for (int i = 0; i < arrstr.Length; i++)
                    {
                        encryptedString += Decrypt(arrstr[i]) + (i == (arrstr.Length - 1) ? "" : " ");

                    }
                }
            }
            return encryptedString;
        }







        public static int? ToNullableInt32(this string s)
        {
            int i;
            if (Int32.TryParse(s, out i)) return i;
            return null;
        }



        public static string ReturnMIMEType(string fileExtension)
        {
            switch (fileExtension.ToLower())
            {
                case ".htm":
                case ".html":
                case ".log":
                    return "text/HTML";
                case ".txt":
                    return "text/plain";
                case ".doc":
                    return "application/ms-word";
                case ".docx":
                    return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
                case ".tiff":
                case ".tif":
                    return "image/tiff";
                case ".asf":
                    return "video/x-ms-asf";
                case ".avi":
                    return "video/avi";
                case ".zip":
                    return "application/zip";
                case ".xls":
                case ".csv":
                    return "application/vnd.ms-excel";
                case ".xlsx":
                    return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
                case ".gif":
                    return "image/gif";
                case ".jpg":
                case "jpeg":
                    return "image/jpeg";
                case ".bmp":
                    return "image/bmp";
                case ".wav":
                    return "audio/wav";
                case ".mp3":
                    return "audio/mpeg3";
                case ".mpg":
                case "mpeg":
                    return "video/mpeg";
                case ".rtf":
                    return "application/rtf";
                case ".asp":
                    return "text/asp";
                case ".pdf":
                    return "application/pdf";
                case ".fdf":
                    return "application/vnd.fdf";
                case ".ppt":
                    return "application/mspowerpoint";
                case ".pptx":
                    return "application/vnd.openxmlformats-officedocument.presentationml.presentation";
                case ".dwg":
                    return "image/vnd.dwg";
                case ".msg":
                    return "application/msoutlook";
                case ".xml":
                case ".sdxl":
                    return "application/xml";
                case ".xdp":
                    return "application/vnd.adobe.xdp+xml";
                default:
                    return "application/octet-stream";
            }
        }

        public static string GetFileIconbyExt(string ext)
        {
            switch (ext.ToLower().Trim())
            {
                case ".htm":
                    return "far fa-file-pdf";

                case ".html":
                    return "far fa-file-pdf";

                case ".log":
                    return "far fa-file-pdf";

                case ".txt":
                    return "far fa-file-pdf";

                case ".doc":
                    return "far fa-file-pdf";

                case ".docx":
                    return "far fa-file-pdf";

                case ".tiff":
                    return "far fa-file-pdf";

                case ".tif":
                    return "far fa-file-pdf";

                case ".asf":
                    return "far fa-file-pdf";

                case ".avi":
                    return "far fa-file-pdf";

                case ".zip":
                    return "far fa-file-archive";

                case ".xls":
                    return "far fa-file-pdf";

                case ".csv":
                    return "far fa-file-pdf";

                case ".xlsx":
                    return "far fa-file-pdf";

                case ".gif":
                    return "far fa-file-pdf";

                case ".jpg":
                    return "far fa-file-pdf";

                case "jpeg":
                    return "far fa-file-pdf";

                case ".bmp":
                    return "far fa-file-pdf";

                case ".wav":
                    return "far fa-file-pdf";

                case ".mp3":
                    return "far fa-file-pdf";

                case ".mpg":
                    return "far fa-file-pdf";

                case "mpeg":
                    return "far fa-file-pdf";

                case ".rtf":
                    return "far fa-file-pdf";

                case ".asp":
                    return "far fa-file-pdf";

                case ".pdf":
                    return "far fa-file-pdf";

                case ".fdf":
                    return "far fa-file-pdf";

                case ".ppt":
                    return "far fa-file-pdf";

                case ".pptx":
                    return "far fa-file-pdf";

                case ".dwg":
                    return "far fa-file-pdf";

                case ".msg":
                    return "far fa-file-pdf";

                case ".xml":
                    return "far fa-file-pdf";

                case ".sdxl":
                    return "far fa-file-pdf";

                case ".xdp":
                    return "far fa-file-pdf";

                default:
                    return "far fa-file-pdf";
            }

        }

        public static List<DeleteCheck> DeleteCheckOnMaster(DataContext dc, int pkID, string tableName)
        {
            List<DeleteCheck> deleteCheck = new List<DeleteCheck>();

            try
            {
                string StoredProc = "exec DELETE_CHECK_ON_MASTER " +
                                    "@PKID = " + pkID + "," +
                                    "@TableName = [" + tableName + "]";
                deleteCheck = dc.DeleteCheck.FromSqlRaw(StoredProc).ToList<DeleteCheck>();
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }

            return deleteCheck;
        }
    }


}

