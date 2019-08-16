using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using CSInvestmentApi.Services;
using CSInvestmentApi.Model;
using Microsoft.AspNetCore.Mvc.Formatters;
using Newtonsoft.Json;
using System.Buffers;
using Swashbuckle.AspNetCore.Swagger;

namespace CSInvestmentApi
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get;}

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var environment = Configuration["Configurations:Environment"];
            services.Configure<Configurations>(Configuration.GetSection("Configurations"));
            services.Configure<EnvironmentConfig>(Configuration.GetSection("Configurations:"+environment));
            services.AddDbContext<Entities.Context>(options => 
            options.UseMySQL(Configuration["Configurations:" + environment + ":DbConnection"]));

            // Add application services.IEventLoggerService
            services.AddScoped<IPushNotificationsService, PushNotificationsService>();
            services.AddScoped<IMarketUpdatesService, MarketUpdatesService>();
            services.AddScoped<IStatisticsService, StatisticsService>();
            services.AddScoped<IChatRoomsService, ChatRoomsService>();
            services.AddScoped<IEventLoggerService, EventLoggerService>();
            services.AddScoped<IMessagesService, MessagesService>();
            services.AddScoped<ICoursesService, CoursesService>();
            services.AddScoped<IStudentService, StudentService>();
            services.AddScoped<ILoginService, LoginService>();
            //services.AddMvc();
            services.AddMvc(options =>
            {
                options.OutputFormatters.Clear();
                options.OutputFormatters.Add(new JsonOutputFormatter(new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
                }, ArrayPool<char>.Shared));
            });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info
                {
                    Version = "1.0.8",
                    Title = "CS Investment API",
                    Description = "CS Investment ASP.NET Core Web API",
                    TermsOfService = "None",
                    Contact = new Contact() { Name = "Talking Dotnet", Email = "contact@talkingdotnet.com", Url = "www.talkingdotnet.com" }
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseMvc();
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "CS Investment API 1.0.8");
            });
        }
    }
}


