import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Main from '../pages/Main';
import Cursos from '../pages/Cursos';
import Unidade from '../pages/Unidade';

const Admin = () => (
  <Router>
    <Switch>
      <Route path="/admin/main" component={Main} />
      <Route path="/admin/cursos" component={Cursos} />
      <Route path="/admin/unidade" component={Unidade} />
      <Redirect from="*" to="/admin/main" />
    </Switch>
  </Router>
);

export default Admin;