class PostSerializer < ActiveModel::Serializer
 attributes :id, :title, :image, :body, :student_id

#  not sure if i need
 has_one :student
end

