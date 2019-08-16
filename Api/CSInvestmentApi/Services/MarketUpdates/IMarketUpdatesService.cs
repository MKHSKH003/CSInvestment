using System.Collections.Generic;
using CSInvestmentApi.Entities;

namespace CSInvestmentApi.Services
{
    public interface IMarketUpdatesService
    {
        IEnumerable<Post> Get();
        Post Post(string avatar, string caption, int userId);
        void Delete(int id);
        void addPostLike(int id, int userId);
    }
}
