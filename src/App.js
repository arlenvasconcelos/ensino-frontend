import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

//pages
import Cursos from './pages/Cursos';
import Unidades from './pages/Unidades';
import Dashboard from './pages/Dashboard';

const DashboardRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Dashboard>
        <Component {...props} />
      </Dashboard>
    )}
  />
);

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <DashboardRoute path="/admin/main" exact component={Main} /> */}
          <DashboardRoute path="/admin/cursos" exact component={Cursos} />
          <DashboardRoute path="/admin/unidade" exact component={Unidades} />
          <Redirect from="*" to="/admin/cursos" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
