# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).


users = User.create([
    {
        iduser: 21,
        id: 21,
        nickname: "user21"
    }
])

p "Created #{User.count} users"


posts = Post.create([
    {
        idpost: 11,
        id: 11,
        text: "post 11 text, nice!",
        imageurl: "imageurl11",
        user_id: 21,
        user: users.first
    }
])

p "Created #{Post.count} posts"

comments = Comment.create([
    {
        idcomment: 1,
        id: 1,
        text: "comment 1!",
        user_id: 21,
        post_id: 11,
        post: posts.first,
        user: users.first
    } 
])

p "Created #{Comment.count} comments"