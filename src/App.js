import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

//pages
import Cursos from './pages/Admin/Cursos';
import Unidades from './pages/Admin/Unidades';
import DashboardAdmin from './pages/DashboardAdmin';
import DashboardStudent from './pages/DashboardStudent';
import DashboardEmployee from './pages/DashboardEmployee';

const DashboardAdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <DashboardAdmin>
        <Component {...props} />
      </DashboardAdmin>
    )}
  />
);

const DashboardStudentRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <DashboardStudent>
        <Component {...props} />
      </DashboardStudent>
    )}
  />
);

const DashboardEmployeeRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <DashboardEmployee>
        <Component {...props} />
      </DashboardEmployee>
    )}
  />
);

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <DashboardRoute path="/admin/main" exact component={Main} /> */}
          <DashboardAdminRoute path="/admin/cursos" exact component={Cursos} />
          <DashboardAdminRoute path="/admin/unidade" exact component={Unidades} />
          {/* <Redirect from="*" to="/admin/cursos" /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
