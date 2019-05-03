using System;
using CSInvestmentApi.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Options;

namespace CSInvestmentApi.Entities
{
    public partial class Context : DbContext
    {
        private readonly EnvironmentConfig _environmentConfig;

        public Context(DbContextOptions<Context> options, IOptions<EnvironmentConfig> environmentConfig) : base(options)
        {
            _environmentConfig = environmentConfig.Value;
        }

        public virtual DbSet<Users> Users { get; set; }
        public virtual DbSet<Online> Online { get; set; }
        public virtual DbSet<Students> Students { get; set; }
        public virtual DbSet<Movies> Movies { get; set; }
        public virtual DbSet<Messages> Messages { get; set; }
        public virtual DbSet<Courses> Courses { get; set; }
        public virtual DbSet<StudentCourses> StudentCourses { get; set; }
        public virtual DbSet<ChatRoomMessages> ChatRoomMessages { get; set; }
        public virtual DbSet<ChatRooms> ChatRooms { get; set; }
        public virtual DbSet<MarketUpdates> MarketUpdates { get; set; }
        public virtual DbSet<PushNotifications> PushNotifications { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var database = _environmentConfig.Database;
            modelBuilder.HasAnnotation("ProductVersion", "2.2.0-rtm-35687");

            modelBuilder.Entity<Students>(entity =>
            {
                entity.ToTable("students", database);

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Cell)
                    .IsRequired()
                    .HasColumnName("cell")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Courses)
                    .IsRequired()
                    .HasColumnName("courses")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("email")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Image)
                    .IsRequired()
                    .HasColumnName("image")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.IsAdmin)
                    .HasColumnName("isAdmin")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Location)
                    .IsRequired()
                    .HasColumnName("location")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.PaymentStatus)
                    .IsRequired()
                    .HasColumnName("paymentStatus")
                    .HasMaxLength(255)
                    .IsUnicode(false);

            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.ToTable("users", database);

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.IsAdmin)
                    .HasColumnName("isAdmin")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Online>(entity =>
            {
                entity.ToTable("online", database);

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasMaxLength(255)
                    .IsUnicode(false);

            });

            modelBuilder.Entity<Courses>(entity =>
            {
                entity.ToTable("courses", database);

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.ChatRoomId)
                    .HasColumnName("chatRoomId")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasColumnName("description")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Image)
                    .IsRequired()
                    .HasColumnName("image")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Time)
                    .IsRequired()
                    .HasColumnName("time")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Venue)
                    .IsRequired()
                    .HasColumnName("venue")
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<MarketUpdates>(entity =>
            {
                entity.ToTable("marketUpdates", database);

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(255)");

                entity.Property(e => e.Avatar)
                    .IsRequired()
                    .HasColumnName("avatar")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Caption)
                    .IsRequired()
                    .HasColumnName("caption")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Datetime)
                    .IsRequired()
                    .HasColumnName("datetime")
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<StudentCourses>(entity =>
            {
                entity.ToTable("studentCourses", database);

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.CourseId)
                    .HasColumnName("courseId")
                    .HasColumnType("int(11)");

                entity.Property(e => e.StudentId)
                    .HasColumnName("studentId")
                    .HasColumnType("int(11)");
            });

            modelBuilder.Entity<ChatRoomMessages>(entity =>
            {
                entity.ToTable("chatRoomMessages", database);

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.ChatRoomId)
                    .HasColumnName("chatRoomId")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Date)
                    .IsRequired()
                    .HasColumnName("date")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Message)
                    .IsRequired()
                    .HasColumnName("message")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<ChatRooms>(entity =>
            {
                entity.ToTable("chatRooms", database);

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Avatar)
                    .IsRequired()
                    .HasColumnName("avatar")
                    .HasMaxLength(500)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<PushNotifications>(entity =>
            {
                entity.ToTable("pushNotifications", database);

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.DeviceToken)
                    .IsRequired()
                    .HasColumnName("deviceToken")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.UserId)
                    .HasColumnName("userId")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

        }
    }
}
