class PostSerializer < ActiveModel::Serializer
 attributes :id, :title, :image, :body, :student_id

 has_one :student
end

