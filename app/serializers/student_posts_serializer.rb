class StudentPostsSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :body
end
