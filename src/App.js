import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

//Redux
import { Provider } from 'react-redux';
import store from './store';
import { getAccessToken } from './service/localStorage';

//templates
import DashboardAdmin from './pages/DashboardAdmin';
import DashboardStudent from './pages/DashboardStudent';
import DashboardEmployee from './pages/DashboardEmployee';
//admin pages 
import Cursos from './pages/Admin/Cursos';
import Unidades from './pages/Admin/Unidades';

//student pages
import SolicitationsHistoric  from './components/DashboardStudent/SolicitationsHistoric';
import SolicitationForm  from './components/DashboardStudent/SolicitationForm';
import MainStudent from './components/DashboardStudent/MainStudent';


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
    <Provider store={store}>
      <Router>
        <Switch>
          <DashboardAdminRoute path="/admin/cursos" exact component={Cursos} />
          <DashboardAdminRoute path="/admin/unidade" exact component={Unidades} />
          <DashboardStudentRoute path="/aluno" exact component={MainStudent} />
          <DashboardStudentRoute path="/aluno/solicitacoes" exact component={SolicitationsHistoric} />
          <DashboardStudentRoute path="/aluno/solicitacoes/cadastrar" exact component={SolicitationForm} />
          {/* <Redirect from="*" to="/admin/cursos" /> */}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
