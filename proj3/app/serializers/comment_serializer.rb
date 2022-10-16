class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :idcomment, :text, :user_id, :post_id
end
