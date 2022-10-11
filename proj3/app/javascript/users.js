import React from 'react';
import ReactDOM from 'react-dom';

function Users() {
  return (
    <div>
      <div className="m-5">
        <h1 className="text-center">Users</h1>
      </div>
    </div>
  )
}


ReactDOM.render(
  <Users/>,
  document.getElementById('users'),
);
