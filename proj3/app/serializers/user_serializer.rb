class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :iduser, :nickname

  has_many :comments
  has_many :posts
end
