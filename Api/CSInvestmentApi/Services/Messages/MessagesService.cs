 using System;
using System.Collections.Generic;
using System.Linq;
using CSInvestmentApi.Entities;
using CSInvestmentApi.Converters;

namespace CSInvestmentApi.Services
{
    public class MessagesService : IMessagesService
    {
        private readonly Context _ticketSystemDbContext;
        public MessagesService(Context ticketSystemDbContext)
        {
            _ticketSystemDbContext = ticketSystemDbContext;
        }

        public IEnumerable<ChatRoomMessages> GetMessages(int id)
        {
            return _ticketSystemDbContext.ChatRoomMessages.Where(message => message.ChatRoomId == id)
                                                          .Select(message => MessagesConveter.ConvertMessageToEntityModel(message));
        }

        public IEnumerable<ChatRoomMessages> GetAllMessages()
        {
            return _ticketSystemDbContext.ChatRoomMessages.Select(message => MessagesConveter.ConvertMessageToEntityModel(message));
        }

        public IEnumerable<ChatRoomMessages> SendMessage(int id, string username, string message)
        {
            _ticketSystemDbContext.ChatRoomMessages.Add(new ChatRoomMessages()
            {
                Username = username,
                ChatRoomId = id,
                Message = message,
                Date = DateTime.Now.ToShortTimeString()
            });
            _ticketSystemDbContext.SaveChanges();

            return GetMessages(id);
        }
    }
}
