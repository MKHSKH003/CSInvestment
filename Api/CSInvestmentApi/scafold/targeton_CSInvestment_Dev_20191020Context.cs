using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CSInvestmentApi.scafold
{
    public partial class targeton_CSInvestment_Dev_20191020Context : DbContext
    {
        public targeton_CSInvestment_Dev_20191020Context()
        {
        }

        public targeton_CSInvestment_Dev_20191020Context(DbContextOptions<targeton_CSInvestment_Dev_20191020Context> options)
            : base(options)
        {
        }

        public virtual DbSet<Comment> Comment { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySQL("Server=41.185.8.134;Database=targeton_CSInvestment_Dev_20191020;Uid=targeton_root_Dev;Pwd=WebDev@2019;SSL Mode=None;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.4-servicing-10062");

            modelBuilder.Entity<Comment>(entity =>
            {
                entity.ToTable("Comment", "targeton_CSInvestment_Dev_20191020");

                entity.HasIndex(e => e.PostId)
                    .HasName("FK_Comment_Post");

                entity.HasIndex(e => e.StudentId)
                    .HasName("FK_Comment_Student");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.PostId)
                    .HasColumnName("PostID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.StudentId)
                    .HasColumnName("StudentID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.UserComment)
                    .IsRequired()
                    .HasMaxLength(500)
                    .IsUnicode(false);
            });
        }
    }
}
