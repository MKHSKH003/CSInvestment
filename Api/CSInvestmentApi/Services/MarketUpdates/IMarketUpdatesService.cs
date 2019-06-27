using System.Collections.Generic;
using CSInvestmentApi.Entities;

namespace CSInvestmentApi.Services
{
    public interface IMarketUpdatesService
    {
        IEnumerable<Post> Get();
        Post Post(string avatar, string caption);
        void Delete(int id);
    }
}
