import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import schemeGet from '../views/commonUtils/schemeGet/index'

function Index() {
  return <h2>JSPang.com</h2>;
}

function List() {
  return <h2>List-Page</h2>;
}

function AppRouter() {
  return (
      <div className="router-box">
          <Router>
              <Switch>
                  <Route path="/" exact component={Index} />
                  <Route path="/commonUtils/schemeGet" exact component={schemeGet} />
                  <Route path="/list/" component={List} />
              </Switch>
          </Router>
      </div>
  );
}

export default AppRouter;
