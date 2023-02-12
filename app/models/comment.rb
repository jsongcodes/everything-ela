class Comment < ApplicationRecord
    belongs_to :student
    belongs_to :positivity_post
end
