import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Dashboard from '../pages/Dashboard'

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={Dashboard} />
      {/* <Redirect from="*" to="/" /> */}
    </Switch>

  </Router>
);

export default Routes;