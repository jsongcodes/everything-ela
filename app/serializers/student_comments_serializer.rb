class StudentCommentsSerializer < ActiveModel::Serializer
  attributes :id, :body, :post_id, :post

  belongs_to :post
end
