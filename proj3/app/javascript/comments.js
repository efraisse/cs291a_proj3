import React from 'react';
import ReactDOM from 'react-dom';

function Comments() {
  return (
    <div>
      <div className="m-5">
          <h1 className="text-center">Comments</h1>
      </div>
    </div>
  )
}


ReactDOM.render(
  <Comments/>,
  document.getElementById('comments'),
);
