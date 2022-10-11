# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

#user Ids will start with a one

users = User.create([
    {
        iduser: 11,
        nickname: "bob"
    },
    {
        iduser: 12,
        nickname: "bob2"
    },
    {
        iduser: 13,
        nickname: "bob3"
    },
    {
        iduser: 14,
        nickname: "bob4"
    },
    {
        iduser: 15,
        nickname: "bob5"
    },
    {
        iduser: 16,
        nickname: "bob6"
    }
])

p "Created #{User.count} users"


#Post Ids will start with a three
posts = Post.create([
    {
        idpost: 31,
        text: "nice post 1!",
        imageurl: "imageurl1",
        user: users.first
    },
    {
        idpost: 32,
        text: "nice post 2!",
        imageurl: "imageurl2",
        user: users.second
    },
    {
        idpost: 33,
        text: "nice post 3!",
        imageurl: "imageurl3",
        user: users.third
    },
    {
        idpost: 34,
        text: "nice post 4!",
        imageurl: "imageurl4",
        user: users.fourth
    },
    {
        idpost: 35,
        text: "nice post 5!",
        imageurl: "imageurl5",
        user: users.fifth
    },
    {
        idpost: 36,
        text: "nice post 6!",
        imageurl: "imageurl6",
        user: users[5]
    }
])

p "Created #{Post.count} posts"

#comment Ids will start with a two
comments = Comment.create([
    {
        idcomment: 21,
        text: "nice post 1!",
        post: posts.first,
        user: users.first
    },
    {
        idcomment: 22,
        text: "nice post 2!",
        post: posts.second,
        user: users.second
    },
    {
        idcomment: 23,
        text: "nice post 3!",
        post: posts.third,
        user: users.third
    },
    {
        idcomment: 24,
        text: "nice post 4!",
        post: posts.fourth,
        user: users.fourth
    },
    {
        idcomment: 25,
        text: "nice post 5!",
        post: posts.fifth,
        user: users.fifth
    },
    {
        idcomment: 26,
        text: "nice post 6!",
        post: posts[5],
        user: users[5]
    }   
])

p "Created #{Comment.count} comments"
