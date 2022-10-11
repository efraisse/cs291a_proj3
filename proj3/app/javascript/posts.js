import React from 'react';
import ReactDOM from 'react-dom';

function Posts() {
  return (
    <div>
      <div className="m-5">
        <h1 className="text-center">Posts</h1>
      </div>
    </div>
  )
}

let path = window.location.pathname.split("/")
let id = path[path.length-1]

function PostsID() {
    return (
      <div>
        <div className="m-5">
          <h1 className="text-center">Posts with Id</h1>
          <h2 className="text-center">Id: {id}</h2>
        </div>
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