class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body

  has_one :student, serializer: CommentStudentSerializer
  has_one :post, serializer: CommentPostSerializer
end
