namespace CSInvestmentApi.Services
{
    public interface IEventLoggerService
    {
        void LogEvent(string username, string key);
    }
}
