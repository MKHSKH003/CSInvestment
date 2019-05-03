using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CSInvestmentApi.Entities;
using CSInvestmentApi.Models;

namespace CSInvestmentApi.Services
{
    public interface IChatRoomsService
    {
        IEnumerable<Groups> Get();
    }
}
