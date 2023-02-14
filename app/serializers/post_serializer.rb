class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :body, :is_favorited
end
