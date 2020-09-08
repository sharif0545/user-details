import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PostView from './components/postView/PostView';
import NotFound from './components/notFound/NotFound';
import PersonDetails from './components/allPosts/PersonDetails';
function App() {
  return (
    <div className="App">      
        <Router>
          <Switch>
            <Route path="/postview">
              <PostView></PostView>
            </Route>
            <Route exact path="/">
            <PostView></PostView>
            </Route>
            <Route path="/PersonDetails/:key">
              <PersonDetails></PersonDetails>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
