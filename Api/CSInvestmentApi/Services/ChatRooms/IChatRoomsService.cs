using CSInvestmentApi.Entities;
using System.Collections.Generic;

namespace CSInvestmentApi.Services
{
    public interface IChatRoomsService
    {
        IEnumerable<ChatRoom> Get();
    }
}
