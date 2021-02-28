using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Dtos
{
    public class ResponseResultDto
    {
        public string Message;
        public string MessageType; //Success:S or Error:E
        public IList<object> returnData = new List<object>();
        public List<List<object>> list = new List<List<object>>();
        public List<List<string>> liststring = new List<List<string>>();
        public List<Dictionary<string, string>> lstDict = new List<Dictionary<string, string>>();
        public List<Dictionary<string, bool>> lstBoolDict = new List<Dictionary<string, bool>>();
        public object data;
        public dynamic miscData;
        public string compressedData;
        public string stringData;
        public int IntData;
       
    }
    public class ResponseDto
    {
        public string Message;
        public string MessageType;
     
       

    }
}
