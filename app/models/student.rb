class Student < ApplicationRecord
    has_secure_password

    has_many :posts, dependent: :destroy
    has_many :comments, dependent: :destroy
    has_many :posts, through: :comments

    validates :username, presence: true, uniqueness: true
end