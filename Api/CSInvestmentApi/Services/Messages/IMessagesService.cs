using System.Collections.Generic;
using CSInvestmentApi.Entities;

namespace CSInvestmentApi.Services
{
    public interface IMessagesService
    {
        IEnumerable<Message> GetChatMessages(int id);
        IEnumerable<Message> GetAllMessages();
        void SendMessage(int id, string username, int userId, string message);
    }
}
