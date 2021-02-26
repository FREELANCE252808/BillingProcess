using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Interfaces
{
    public interface ITokenRepository
    {
         Task<IEnumerable<Token>> GetTokenAsync();
         void AddToken(Token token);
         void DeleteTokenByTokenID(int tokenID);
         Task<Token> FindToken(int tokenID);
        public void RomeveToken(Token token);
       
        
    }
}