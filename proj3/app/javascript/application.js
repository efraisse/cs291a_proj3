import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


//import '../../node_modules/bootstrap/dist/css/bootstrap.css';


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
      <div className="m-5">
        <h1 className="text-center">Hello</h1>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);