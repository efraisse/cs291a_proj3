import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//import PostsComp from './components/posts.js'

/*function App({Component, pageProps}) {
  return <Component {...pageProps} />
}

export default App*/

/*
<BrowserRouter>
        <div>
          <Route exact path="/posts" render={() => (
              <Posts/>
            )}/>
        </div>
      </BrowserRouter>
*/

/*
function Posts() {
  return (
    <div>
      <h1>Posts</h1>
    </div>
  )
}*/

/*<Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/posts">Posts</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/posts">
                <Posts />
              </Route>
            </Switch>
          </div>
        </Router>*/


function App() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);