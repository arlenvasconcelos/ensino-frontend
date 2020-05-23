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
import Login from './pages/Login';


//student pages
import SolicitationsHistoric  from './components/DashboardStudent/SolicitationsHistoric';
import SolicitationForm  from './components/DashboardStudent/SolicitationForm';
import MainStudent from './components/DashboardStudent/MainStudent';

console.log(getAccessToken())


const DashboardAdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (getAccessToken() ? (
      <DashboardAdmin>
        <Component {...props} />
      </DashboardAdmin>
    ) : (
      <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    ))
    }
  />
);

const DashboardStudentRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (getAccessToken() ? (
      <DashboardStudent>
        <Component {...props} />
      </DashboardStudent>
    ) : (
      <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    ))
    }
  />
);

const DashboardEmployeeRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (getAccessToken() ? (
      <DashboardEmployee>
        <Component {...props} />
      </DashboardEmployee>
    ) : (
      <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    ))
    }
  />
);

function App() {
  console.log(store.getState())
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <DashboardAdminRoute path="/admin/cursos" exact component={Cursos} />
          <DashboardAdminRoute path="/admin/unidade" exact component={Unidades} />
          <DashboardStudentRoute path="/aluno" exact component={MainStudent} />
          <DashboardStudentRoute path="/aluno/solicitacoes" exact component={SolicitationsHistoric} />
          <DashboardStudentRoute path="/aluno/solicitacoes/cadastrar" exact component={SolicitationForm} />
          <DashboardEmployeeRoute path="/servidor" exact component={MainStudent} />
          <Route path="/login" exact component={Login}/>
          <Redirect from="*" to="/login" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
