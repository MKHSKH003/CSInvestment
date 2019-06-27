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

        public virtual DbSet<ChatRoom> ChatRoom { get; set; }
        public virtual DbSet<Course> Course { get; set; }
        public virtual DbSet<DeviceToken> DeviceToken { get; set; }
        public virtual DbSet<Message> Message { get; set; }
        public virtual DbSet<Online> Online { get; set; }
        public virtual DbSet<Post> Post { get; set; }
        public virtual DbSet<Student> Student { get; set; }
        public virtual DbSet<StudentCourse> StudentCourse { get; set; }
        public virtual DbSet<StudentChatRoom> StudentChatRoom { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var database = _environmentConfig.Database;
            modelBuilder.HasAnnotation("ProductVersion", "2.2.0-rtm-35687");

            modelBuilder.Entity<ChatRoom>(entity =>
            {
                entity.ToTable("ChatRoom", database);

                entity.HasIndex(e => e.CourseId)
                    .HasName("FK_ChatRoom_Course");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Avatar)
                    .IsRequired()
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.CourseId)
                    .HasColumnName("CourseID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Course>(entity =>
            {
                entity.ToTable("Course", database);

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Image)
                    .IsRequired()
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Time)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Venue)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<DeviceToken>(entity =>
            {
                entity.ToTable("DeviceToken", database);

                entity.HasIndex(e => e.StudentId)
                    .HasName("FK_PushNotification_Student");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.UserDeviceToken)
                    .IsRequired()
                    .HasColumnName("DeviceToken")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.StudentId)
                    .HasColumnName("StudentID")
                    .HasColumnType("int(11)");
            });

            modelBuilder.Entity<Message>(entity =>
            {
                entity.ToTable("Message", database);

                entity.HasIndex(e => e.StudentId)
                    .HasName("FK_Message_Student");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.ChatRoomId).HasColumnType("int(11)");

                entity.Property(e => e.Date)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.UserMessage)
                    .IsRequired()
                    .HasColumnName("Message")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.StudentId)
                    .HasColumnName("StudentID")
                    .HasColumnType("int(11)");
            });

            modelBuilder.Entity<Online>(entity =>
            {
                entity.ToTable("Online", database);

                entity.HasIndex(e => e.StudentId)
                    .HasName("FK_Online_Student");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.StudentId)
                    .HasColumnName("StudentID")
                    .HasColumnType("int(11)");
            });

            modelBuilder.Entity<Post>(entity =>
            {
                entity.ToTable("Post", database);

                entity.HasIndex(e => e.StudentId)
                    .HasName("FK_Post_Student");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("int(255)");

                entity.Property(e => e.Avatar)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Caption)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Datetime)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.StudentId)
                    .HasColumnName("StudentID")
                    .HasColumnType("int(11)");
            });

            modelBuilder.Entity<Student>(entity =>
            {
                entity.ToTable("Student", database);

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Cell)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Image)
                    .IsRequired()
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.IsAdmin).HasColumnType("int(11)");

                entity.Property(e => e.Location)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.PaymentStatus)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);


            });

            modelBuilder.Entity<StudentCourse>(entity =>
            {
                entity.ToTable("StudentCourse", database);

                entity.HasIndex(e => e.CourseId)
                    .HasName("FK_StudentCourses_Course");

                entity.HasIndex(e => e.StudentId)
                    .HasName("FK_StudentCourses_Student");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.CourseId)
                    .HasColumnName("CourseID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.StudentId)
                    .HasColumnName("StudentID")
                    .HasColumnType("int(11)");
            });

            modelBuilder.Entity<StudentChatRoom>(entity =>
            {
                entity.ToTable("StudentChatRoom", database);

                entity.Property(e => e.Id).HasColumnName("ID").HasColumnType("int(11)");

                entity.Property(e => e.ChatRoomId).HasColumnName("ChatRoomID").HasColumnType("int(11)");

                entity.Property(e => e.StudentId).HasColumnName("StudentID").HasColumnType("int(11)");

                entity.HasOne(scr => scr.Student)
                    .WithMany(s => s.StudentChatRooms)
                    .HasForeignKey(e => e.StudentId)
                    .HasConstraintName("FK_StudentChatRooms_Student");

                entity.HasOne(scr => scr.ChatRoom)
                   .WithMany(cr => cr.StudentChatRooms)
                   .HasForeignKey(e => e.ChatRoomId)
                   .HasConstraintName("FK_StudentChatRoom_ChatRoom");

            });
        }
    }
}
