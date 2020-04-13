import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  return <h2>JSPang.com</h2>;
}

function List() {
  return <h2>List-Page</h2>;
}

function AppRouter() {
  return (
      <Router>
        <Route path="/" exact component={Index} />
        <Route path="/list/" component={List} />
      </Router>
  );
}

export default AppRouter;
