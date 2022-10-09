import React from 'react';
import ReactDOM from 'react-dom';

function Posts() {
  return (
    <div>
      <h1>Posts</h1>
    </div>
  )
}

let path = window.location.pathname.split("/")
let id = path[path.length-1]

function PostsID() {
    return (
      <div>
        <h1>Posts with Id</h1>
        <h2>Id: {id}</h2>
      </div>
    )
}

let posts_el = document.getElementById('posts')

let postsid_el = document.getElementById('posts_id')

if(posts_el){
    ReactDOM.render(
        <Posts/>,
        document.getElementById('posts'),
    );
}
if(postsid_el){
    ReactDOM.render(
        <PostsID/>,
        document.getElementById('posts_id'),
    );
}

/*
ReactDOM.render(
  <Posts/>,
  document.getElementById('posts'),
);


ReactDOM.render(
    <PostsID/>,
    document.getElementById('posts_id'),
);*/