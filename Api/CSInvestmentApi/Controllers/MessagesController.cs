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
    [Route("api/messages")]
    public class MessagesController : Controller
    {
        private readonly IMessagesService _messagesService;
        public MessagesController(IMessagesService messagesService)
        {
            _messagesService = messagesService;
        }

        [HttpGet("get-all-messages")]
        public IEnumerable<Message> Get()
        {
            return _messagesService.GetAllMessages();
        }

        [HttpGet("get-chat-messages")]
        public IEnumerable<Message> Chat([FromQuery] int id)
        {
            return _messagesService.GetChatMessages(id);
        }

        [HttpGet("send-message")]
        public ActionResult Send([FromQuery] int id, [FromQuery] string username, [FromQuery] int userId, [FromQuery] string message)
        {
            _messagesService.SendMessage(id, username, userId, message);
            return Json(new { Message = "Success" });
        }

    }
}
