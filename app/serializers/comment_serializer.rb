class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :student_id, :post_id

  has_one :student, serializer: CommentStudentSerializer
  has_one :post, serializer: CommentPostSerializer
end
