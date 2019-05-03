using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CSInvestmentApi.Entities;

namespace CSInvestmentApi.Services
{
    public interface IMarketUpdatesService
    {
        IEnumerable<MarketUpdates> Get();
        IEnumerable<MarketUpdates> Post(string avatar, string caption);
        IEnumerable<MarketUpdates> Delete(int id);
    }
}
