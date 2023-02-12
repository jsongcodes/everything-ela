class Student < ApplicationRecord
    has_secure_password

    has_many :comments
    has_many :posts, through: :comments

    validates :username, presence: true, uniqueness: true
end
