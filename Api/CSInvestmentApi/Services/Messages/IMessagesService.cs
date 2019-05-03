using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CSInvestmentApi.Entities;

namespace CSInvestmentApi.Services
{
    public interface IMessagesService
    {
        IEnumerable<ChatRoomMessages> GetMessages(int id);
        IEnumerable<ChatRoomMessages> GetAllMessages();
        IEnumerable<ChatRoomMessages> SendMessage(int id, string username, string message);
    }
}
