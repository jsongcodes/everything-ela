class Post < ApplicationRecord
    validates :title, presence: true

    
    belongs_to :student
    
    has_many :comments
    has_many :students, through: :comments

    # def highest_poster_count
    #     @students = Student.joins(:comments).group('student.id').limit(1).first
    #     # count = 0
    #     # self.student.each do |student|
    #     #     if student.nil?
    #     #         count
    #     #     else
    #     #         count += 1
    #     #     end
    #     # end
    # end


    # def self.highest_poster
    #     # Post.group('post.id').order('count(post.student_id) desc')
        
    #     # # .limit(1).first
    #     Post.find_by(student_id)
    # end

    # .limit(1).first

    # def self.highest_poster
    #     # @highest_poster = Post.select(:student_id).order(student_id: :desc).limit(1).first
    #     # Post.select(:student_id).group(:student_id).order('student_id DESC').limit(1)
    #     # Post.group(:student_id).count.maximum
    #     # Post.group(:student_id).count.order('count(student_id) desc')
    #     # Post.select(:student_id).count
        
    #     # order('count(student_id) desc')

        
    # end

    # def self.highest_poster
    #     # Post.group(:student_id).count.order
    #     # Post.order('student_id DESC').limit(1).count(:id)
    #     # Post.select(:student_id).order("count(student_id) desc")
    #     # Post.joins(:students).group(:id).order("count(students.id) desc").limit(1)
    #     # Post.group(:id).order("count(student_id) desc").limit(1)
    #     # Post.group('posts.id').order('count(posts.student_id) desc').limit(1).pluck(:student_id).first i think this is the one

    #     Post.group('posts.id').order('count(posts.student_id) desc')
    # end

    # def self.student_count
    #     Post.select(:student_id).count
    # end

    # def self.maximum
    #     self.student_count.maximum
    # end

    # def self.post_numbers
    #     Post.group(:student_id).count
    # end

    # def self.highest_poster
    #     Post.where("student_id = ?", self.)
    # end


end