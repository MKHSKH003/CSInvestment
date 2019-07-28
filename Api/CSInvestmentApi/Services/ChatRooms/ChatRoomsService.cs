 using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using CSInvestmentApi.Entities;

namespace CSInvestmentApi.Services
{
    public class ChatRoomsService : IChatRoomsService
    {
        private readonly Context _ticketSystemDbContext;
        private readonly IEventLoggerService _eventLoggerService;

        public ChatRoomsService(Context ticketSystemDbContext, IEventLoggerService eventLoggerService)
        {
            _ticketSystemDbContext = ticketSystemDbContext;
            _eventLoggerService = eventLoggerService;
        }

        public IEnumerable<ChatRoom> Get()
        {
            return _ticketSystemDbContext.ChatRoom
                .Include(cr => cr.Messages)
                    .ThenInclude(scr => scr.Student)
                .Include(cr => cr.StudentChatRooms)
                    .ThenInclude( scr => scr.Student);
        }

    }
}
