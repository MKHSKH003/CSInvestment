using CSInvestmentApi.Entities;
using CSInvestmentApi.Model;
using CSInvestmentApi.Models;
using Microsoft.Extensions.Options;

namespace CSInvestmentApi.Services
{
    public class SystemDataService : ISystemDataService
    {
        private readonly EnvironmentConfig _environmentConfig;
        private readonly Context _ticketSystemDbContext;
        private readonly IStudentService _studentService;
        private readonly IChatRoomsService _chatRoomsService;
        private readonly ICoursesService _coursesService;
        private readonly IMarketUpdatesService _marketUpdatesService;
        private readonly IMessagesService _messagesService;
        private readonly IPushNotificationsService _pushNotificationsService;

        public SystemDataService(IPushNotificationsService pushNotificationsService, IMessagesService messagesService, IMarketUpdatesService marketUpdatesService, ICoursesService coursesService, IChatRoomsService chatRoomsService, Context ticketSystemDbContext, IStudentService studentService, IOptions<EnvironmentConfig> environmentConfig)
        {
            _ticketSystemDbContext = ticketSystemDbContext;
            _studentService = studentService;
            _chatRoomsService = chatRoomsService;
            _coursesService = coursesService;
            _marketUpdatesService = marketUpdatesService;
            _messagesService = messagesService;
            _environmentConfig = environmentConfig.Value;
            _pushNotificationsService = pushNotificationsService;
        }

        public SystemData Get()
        {
            return new SystemData()
            {
                students = _studentService.Get(),
                groups = _chatRoomsService.Get(),
                courses = _coursesService.Get(),
                studentCourses = _coursesService.GetStudentCourses(),
                marketUpdates = _marketUpdatesService.Get(),
                messages = _messagesService.GetAllMessages(),
                pushNotifications = _pushNotificationsService.Get()
            };
        }

    }
}
