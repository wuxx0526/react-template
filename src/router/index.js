import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import routes from './routes'
import auth from '../utils/auth'

function permission(LayOut, props) {
    const isLogin = auth.checkLoginStatus()
    if (isLogin) {
        return <LayOut {...props}/>
    } else {
        return <LayOut {...props}/>
        /*return <Redirect to="/user/login" />*/
    }
}

function AppRouter(props) {
  return (
      <div className="router-box">
          <Router>
              <Switch>
                  {
                      routes.map((item, index) => {
                          return <Route key={index} path={item.path} component={props => permission(item.component, props)} />
                      })
                  }
                  {/*<Route path="/" exact component={Index} />
                  <Route path="/commonUtils/schemeGet" exact component={schemeGet} />
                  <Route path="/user/bind" component={bind} />
                  <Route path="/list/" component={List} />*/}
              </Switch>
          </Router>
      </div>
  );
}

export default AppRouter;
