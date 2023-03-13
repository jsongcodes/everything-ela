class StudentSerializer < ActiveModel::Serializer
  attributes :id, :username, :poster_count

  has_many :posts, serializer: StudentPostsSerializer
  has_many :comments, serializer: StudentCommentsSerializer
end
