 using System;
using CSInvestmentApi.Entities;

namespace CSInvestmentApi.Services
{
    public class EventLoggerService : IEventLoggerService
    {
        private readonly Context _ticketSystemDbContext;
        public EventLoggerService(Context ticketSystemDbContext)
        {
            _ticketSystemDbContext = ticketSystemDbContext;
        }

        public void LogEvent(string username, string key)
        {
            if (key == "new-student")
            {
                _ticketSystemDbContext.Message.Add(new Message()
                {
                    //Username = "Event Logger",
                    ChatRoomId = 1,
                    UserMessage = username + " has added a new student",
                    Date = DateTime.Now.ToShortTimeString()
                });
                _ticketSystemDbContext.SaveChanges();
            }

            else if (key == "update-payment-status")
            {
                _ticketSystemDbContext.Message.Add(new Message()
                {
                    //Username = "Event Logger",
                    ChatRoomId = 1,
                    UserMessage = username + " has updated a student payment status",
                    Date = DateTime.Now.ToShortTimeString()
                });
                _ticketSystemDbContext.SaveChanges();
            }

            else if (key == "delete-student")
            {
                _ticketSystemDbContext.Message.Add(new Message()
                {
                    //Username = "Event Logger",
                    ChatRoomId = 1,
                    UserMessage = username + " has delete a student record",
                    Date = DateTime.Now.ToShortTimeString()
                });
                _ticketSystemDbContext.SaveChanges();
            }

            else if (key == "update-student-courses")
            {
                _ticketSystemDbContext.Message.Add(new Message()
                {
                    //Username = "Event Logger",
                    ChatRoomId = 1,
                    UserMessage = username + " has updated a student courses",
                    Date = DateTime.Now.ToShortTimeString()
                });
                _ticketSystemDbContext.SaveChanges();
            }

        }
       
    }
}
