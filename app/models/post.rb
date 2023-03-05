class Post < ApplicationRecord
    validates :title, presence: true

    
    belongs_to :student
    
    has_many :comments
    has_many :students, through: :comments
end