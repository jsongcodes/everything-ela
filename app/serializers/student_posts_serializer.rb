class StudentPostsSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :body, :student_id
end
