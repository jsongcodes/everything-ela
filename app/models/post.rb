class Post < ApplicationRecord
    has_many :comments
    has_many :students, through: :comments
end
