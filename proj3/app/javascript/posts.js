import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from "react-router";

function Posts() {
  //posts = //fetch posts
  var posts_json = [
    {
      "test": 12,
      "iduser": 1,
      "postid": 3,
    },
    {
      "test": 11,
      "iduser": 5,
      "postid": 8,
    }
  ];
  return (
    <div>
      <div className="m-5">
        <h1 className="text-center">Posts</h1>
      </div>
      <div className="m-5">
        <table className="table table-sm table-responsive table-hover table-striped">
          <thead>
            <tr>
              <th className="text-center"></th>
              <th className="text-center">Poster User ID</th>
              <th className="text-center">Post</th>
              <th className="text-center">View Posts</th>
            </tr>
          </thead>
          <tbody>
            {posts_json.map((post, i) => {
              return (
                <tr>
                  <td scope="row">{i+1}</td>
                  <td width="20%">{post["iduser"]}</td>
                  <td className="text-center" width="50%">Post</td>
                  <td width="20%">
                    <a href={window.location.href+"/"+post["postid"]}>
                      <button type="button">View Post</button>
                    </a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

let path = window.location.pathname.split("/")
let id = path[path.length-1]

function PostsID() {
  var comments_json = [
    {
      "iduser": 1,
      "comment": "very nice",
    },
    {
      "iduser": 5,
      "comment": "This is SO COOL!!!!",
    }
  ];
  return (
    <div>
      <div className="m-5">
        <h1 className="text-center">Posts with Id</h1>
        <h2 className="text-center">Post Id: {id}</h2>
      </div>
      <div className="m-5">
        <h2>Post</h2>
      </div>
      <div className="m-5">
        <table className="table table-sm table-responsive table-hover table-striped">
          <thead>
            <tr>
              <th className="text-center"></th>
              <th className="text-center">Commenter User ID</th>
              <th className="text-center">Comment</th>
            </tr>
          </thead>
          <tbody>
            {comments_json.map((comment, i) => {
              return (
                <tr>
                  <td scope="row">{i+1}</td>
                  <td width="20%">{comment["iduser"]}</td>
                  <td className="text-center" width="70%">{comment["comment"]}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
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