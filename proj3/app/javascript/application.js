import React from 'react';
import ReactDOM from 'react-dom';



function App() {
  return (
    <div>
      <div className="m-5">
        <h1 className="text-center">Hello</h1>
      </div>
      <div class="m-5 container">
        <div class="row">
          <div class="col-4">
            <a href={window.location.origin+"/posts"}>
              <button type="button">View Posts</button>
            </a>
          </div>
          <div class="col-4">
            <a href={window.location.origin+"/users"}>
              <button type="button">View Users</button>
            </a>
          </div>
          <div class="col-4">
            <a href={window.location.origin+"/comments"}>
              <button type="button">View Comments</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);