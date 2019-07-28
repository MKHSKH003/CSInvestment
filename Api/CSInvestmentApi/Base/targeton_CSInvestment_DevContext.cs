using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CSInvestmentApi.Base
{
    public partial class targeton_CSInvestment_DevContext : DbContext
    {
        public targeton_CSInvestment_DevContext()
        {
        }

        public targeton_CSInvestment_DevContext(DbContextOptions<targeton_CSInvestment_DevContext> options)
            : base(options)
        {
        }

        public virtual DbSet<StudentChatRooms> StudentChatRooms { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySQL("server=41.185.8.134;userid=targeton_root_Dev;password=WebDev@2019;database=targeton_CSInvestment_Dev;SSL Mode=None;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.0-rtm-35687");

            modelBuilder.Entity<StudentChatRooms>(entity =>
            {
                entity.ToTable("StudentChatRooms", "targeton_CSInvestment_Dev");

                entity.HasIndex(e => e.ChatRoomId)
                    .HasName("FK_StudentChatRooms_ChatRoom");

                entity.HasIndex(e => e.StudentId)
                    .HasName("FK_StudentChatRooms_Student");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.ChatRoomId)
                    .HasColumnName("ChatRoomID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.StudentId)
                    .HasColumnName("StudentID")
                    .HasColumnType("int(11)");
            });
        }
    }
}
