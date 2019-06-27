 using System;
using System.Collections.Generic;
using System.Linq;
using CSInvestmentApi.Entities;

namespace CSInvestmentApi.Services
{
    public class MessagesService : IMessagesService
    {
        private readonly Context _ticketSystemDbContext;
        public MessagesService(Context ticketSystemDbContext)
        {
            _ticketSystemDbContext = ticketSystemDbContext;
        }

        public IEnumerable<Message> GetChatMessages(int id)
        {
            return _ticketSystemDbContext.Message.Where(message => message.ChatRoomId == id).ToList();
        }

        public IEnumerable<Message> GetAllMessages()
        {
            return _ticketSystemDbContext.Message;
        }

        public Message SendMessage(int id, string username, string message)
        {
            Message UserMessage = new Message()
            {
                StudentId = id,
                ChatRoomId = id,
                UserMessage = message,
                Date = DateTime.Now.ToShortTimeString()
            };
            _ticketSystemDbContext.Message.Add(UserMessage);
            _ticketSystemDbContext.SaveChanges();

            return UserMessage;
        }
    }
}
