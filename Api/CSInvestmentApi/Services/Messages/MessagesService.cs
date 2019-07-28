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

        public void SendMessage(int id, string username, int userId, string message)
        {
            Message UserMessage = new Message()
            {
                StudentId = userId,
                ChatRoomId = id,
                UserMessage = message,
                Date = DateTime.Now.ToShortTimeString()
            };
            _ticketSystemDbContext.Message.Add(UserMessage);
            _ticketSystemDbContext.SaveChanges();

        }
    }
}
