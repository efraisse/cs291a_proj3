class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :idpost, :text, :imageurl, :user_id

  has_many :comments
end
