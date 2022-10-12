import React from 'react';
import ReactDOM from 'react-dom';

function Users() {
  var users_json = [
    {
      "test": 12,
      "iduser": 1,
    },
    {
      "test": 11,
      "iduser": 5,
    }
  ];
  return (
    <div>
      <div className="m-5">
        <h1 className="text-center">Users</h1>
      </div>
      <div className="m-5">
        <table className="table table-sm table-responsive table-hover table-striped">
          <thead>
            <tr>
              <th className="text-center"></th>
              <th className="text-center">User ID</th>
              <th className="text-center">View User's Posts</th>
            </tr>
          </thead>
          <tbody>
            {users_json.map((user, i) => {
              return (
                <tr>
                  <td scope="row">{i+1}</td>
                  <td width="20%">{user["iduser"]}</td>
                  <td width="20%">
                    <a href={window.location.href+"/"+user["iduser"]}>
                      <button type="button">View Posts</button>
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

function UsersID() {
  var posts_json = [
    {
      "test": 12,
      "iduser": 1,
      "postid": 3,
    },
    {
      "test": 11,
      "iduser": 1,
      "postid": 8,
    }
  ];
  return (
    <div>
      <div className="m-5">
        <h1 className="text-center">Users with Id</h1>
        <h2 className="text-center">User Id: {id}</h2>
      </div>
      <div className="m-5">
        <h2>User Info</h2>
      </div>
      <div className="m-5">
        <table className="table table-sm table-responsive table-hover table-striped">
          <thead>
            <tr>
              <th className="text-center"></th>
              <th className="text-center">Post</th>
              <th className="text-center">View Posts</th>
            </tr>
          </thead>
          <tbody>
            {posts_json.map((post, i) => {
              return (
                <tr>
                  <td scope="row">{i+1}</td>
                  <td className="text-center" width="70%">Post</td>
                  <td width="20%">
                    <a href={window.location.origin+"/posts/"+post["postid"]}>
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

let users_el = document.getElementById('users')

let usersid_el = document.getElementById('users_id')

if(users_el){
    ReactDOM.render(
        <Users/>,
        document.getElementById('users'),
    );
}
if(usersid_el){
    ReactDOM.render(
        <UsersID/>,
        document.getElementById('users_id'),
    );
}


/*
ReactDOM.render(
  <Users/>,
  document.getElementById('users'),
);
*/