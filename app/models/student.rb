class Student < ApplicationRecord
    has_secure_password

    has_many :posts, dependent: :destroy
    has_many :comments, dependent: :destroy
    has_many :commented_posts, through: :comments, source: :post
# only posts commented on student.commented_posts
    validates :username, presence: true, uniqueness: true
end