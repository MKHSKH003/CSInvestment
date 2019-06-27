using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CSInvestmentApi.Entities;

namespace CSInvestmentApi.Services
{
    public interface IMessagesService
    {
        IEnumerable<Message> GetChatMessages(int id);
        IEnumerable<Message> GetAllMessages();
        Message SendMessage(int id, string username, string message);
    }
}
