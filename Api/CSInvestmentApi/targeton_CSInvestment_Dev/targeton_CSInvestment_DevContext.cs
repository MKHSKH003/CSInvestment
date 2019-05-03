using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CSInvestmentApi.targeton_CSInvestment_Dev
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

        public virtual DbSet<PushNotifications> PushNotifications { get; set; }

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

            modelBuilder.Entity<PushNotifications>(entity =>
            {
                entity.ToTable("pushNotifications", "targeton_CSInvestment_Dev");

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
            });
        }
    }
}
