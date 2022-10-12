import React from 'react';
import ReactDOM from 'react-dom';

function Comments() {
  var comments_json = [
    {
      "iduser": 1,
      "postid": 3,
      "comment": "very nice",
    },
    {
      "iduser": 5,
      "postid": 8,
      "comment": "This is SO COOL!!!!",
    }
  ];
  return (
    <div>
      <div className="m-5">
          <h1 className="text-center">Comments</h1>
      </div>
      <div className="m-5">
        <table className="table table-sm table-responsive table-hover table-striped">
          <thead>
            <tr>
              <th className="text-center"></th>
              <th className="text-center">Commenter User ID</th>
              <th className="text-center">Post ID</th>
              <th className="text-center">Comment</th>
              <th className="text-center">View Posts</th>
            </tr>
          </thead>
          <tbody>
            {comments_json.map((comment, i) => {
              return (
                <tr>
                  <td scope="row">{i+1}</td>
                  <td width="15%">{comment["iduser"]}</td>
                  <td width="15%">{comment["postid"]}</td>
                  <td className="text-center" width="45%">{comment["comment"]}</td>
                  <td width="15%">
                    <a href={window.location.origin+"/posts/"+comment["postid"]}>
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


ReactDOM.render(
  <Comments/>,
  document.getElementById('comments'),
);
