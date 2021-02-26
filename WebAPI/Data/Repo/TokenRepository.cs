using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Data.Repo
{
    public class TokenRepository : ITokenRepository
    {
        private readonly DataContext dc;

        public TokenRepository(DataContext dc)
        {
            this.dc = dc;
        }
        public void AddToken(Token token)
        {
            try
            {

                dc.Token.Add(token);
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
        }
        public void RomeveToken(Token token)
        {
            dc.Token.Remove(token);
        }
        public void DeleteTokenByTokenID(int TokenId)
        {
            var token = dc.Token.Find(TokenId);
            dc.Token.Remove(token);
        }

        public async Task<Token> FindToken(int id)
        {
            return await dc.Token.FindAsync(id);
        }

        public async Task<IEnumerable<Token>> GetTokenAsync()
        {
            return await dc.Token.ToListAsync();
        }
    }
}