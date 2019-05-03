using CSInvestmentApi.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CSInvestmentApi.Services
{
    public interface ILoginService
    {
        Students Authentication(string username, string password);
        void logout(string username);
    }
}
