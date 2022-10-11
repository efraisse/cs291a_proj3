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

#comment Ids will start with a three
posts = Post.create([
    {
        idpost: 21,
        text: "nice post 1!",
        imageurl: "imageurl1",
        user_id: 11
    },
    {
        idpost: 22,
        text: "nice post 2!",
        imageurl: "imageurl2",
        user_id: 12
    },
    {
        idpost: 23,
        text: "nice post 3!",
        imageurl: "imageurl3",
        user_id: 13
    },
    {
        idpost: 24,
        text: "nice post 4!",
        imageurl: "imageurl4",
        user_id: 14
    },
    {
        idpost: 25,
        text: "nice post 5!",
        imageurl: "imageurl5",
        user_id: 15
    },
    {
        idpost: 26,
        text: "nice post 6!",
        imageurl: "imageurl6",
        user_id: 16
    }
])

#comment Ids will start with a two
comments = Comment.create([
    {
        idcomment: 21,
        text: "nice post 1!",
        post_id: 31,
        user_id: 11
    },
    {
        idcomment: 22,
        text: "nice post 2!",
        post_id: 32,
        user_id: 12
    },
    {
        idcomment: 23,
        text: "nice post 3!",
        post_id: 33,
        user_id: 13
    },
    {
        idcomment: 24,
        text: "nice post 4!",
        post_id: 34,
        user_id: 14
    },
    {
        idcomment: 25,
        text: "nice post 5!",
        post_id: 35,
        user_id: 15
    },
    {
        idcomment: 26,
        text: "nice post 6!",
        post_id: 36,
        user_id: 16
    }   
])
