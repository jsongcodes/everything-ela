class Comment < ApplicationRecord
    validates :body, length: { minimum: 10 }

    belongs_to :student
    belongs_to :post
end
