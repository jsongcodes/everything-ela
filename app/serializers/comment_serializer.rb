class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body

  has_one :student
  has_one :post
end
