class Student < ApplicationRecord
    has_secure_password

    has_many :posts, dependent: :destroy
    has_many :comments, dependent: :destroy
    has_many :posts, through: :comments

    validates :username, presence: true, uniqueness: true

    def poster_count
        # count = 0
        # self.posts.each do |post|
        #     if post.student_id.present?
        #         count += 1
        #     end
        #     # if post.student_id != nil
        #     #     count += 1
        #     # end
        # end
        # count
        "#{title}: #{student_id}"
        byebug
    end
end