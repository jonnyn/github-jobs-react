import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Landing, Details } from 'sections';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="pt-5">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/details/:jobId">
            <Details />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
