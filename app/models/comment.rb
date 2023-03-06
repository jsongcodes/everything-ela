class Comment < ApplicationRecord
    validates :body, length: { minimum: 1 }

    belongs_to :student
    belongs_to :post
end
