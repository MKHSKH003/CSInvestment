using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CSInvestmentApi.Model;
using Microsoft.AspNetCore.Mvc;
using CSInvestmentApi.Services;
using CSInvestmentApi.Entities;

namespace CSInvestmentApi.Controllers
{
    [Route("api/chatMessages")]
    public class MessagesController : Controller
    {
        private readonly IMessagesService _messagesService;
        public MessagesController(IMessagesService messagesService)
        {
            _messagesService = messagesService;
        }

        [HttpGet("get-messages")]
        public IEnumerable<ChatRoomMessages> GetMessages([FromQuery] int id)
        {
            return _messagesService.GetMessages(id);
        }

        [HttpGet("get-all-messages")]
        public IEnumerable<ChatRoomMessages> GetAllMessages()
        {
            return _messagesService.GetAllMessages();
        }

        [HttpGet("send-message")]
        public IEnumerable<ChatRoomMessages> SendMessage([FromQuery] int id, [FromQuery] string username, [FromQuery] string message)
        {
            return _messagesService.SendMessage(id, username, message);
        }

    }
}
