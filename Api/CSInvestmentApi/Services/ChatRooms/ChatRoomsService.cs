 using System;
using System.Collections.Generic;
using System.Linq;
using CSInvestmentApi.Entities;
using CSInvestmentApi.Converters;
using CSInvestmentApi.Models;
using System.Net;

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

        public IEnumerable<Groups>  Get()
        {
            IEnumerable<Students> students = _ticketSystemDbContext.Students.Select(student => StudentsConveter.ConvertStudentToEntityModel(student));
            IEnumerable<ChatRooms> chatRooms = _ticketSystemDbContext.ChatRooms.Select(chatRoom => ChatRoomsConveter.ConvertChatRoomToEntityModel(chatRoom));
            IEnumerable<Groups> groups = chatRooms.Select(chatRoom => ChatRoomsConveter.ConvertGroupToEntityModel(chatRoom, students));

            return groups;
        }

    }
}
