import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

// theme material-ui
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

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
import Solicitations  from './pages/Student/Solicitations';
import SolicitationSingle  from './pages/Student/SolicitationSingle';
import MainStudent from './pages/Student/MainStudent';
import MainEmployee from './components/DashboardEmployee/MainEmployee';

//crete theme material-ui
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#6abf69',
      main: '#388e3c',
      dark: '#00600f',
      contrastText: '#000',
    },
    secondary: {
      light: '#ff5b50',
      main: '#ca2027',
      dark: '#910000',
      contrastText: '#fff',
    },
  },
  overrides: {
    MuiFormLabel: {
      root: {
        color: '#000',
        fontWeight: 700
      }
    }
  }
});

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
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Switch>
            <DashboardAdminRoute path="/admin" exact component={Cursos} />
            <DashboardAdminRoute path="/admin/cursos" exact component={Cursos} />
            <DashboardAdminRoute path="/admin/unidade" exact component={Unidades} />
            <DashboardStudentRoute path="/aluno" exact component={MainStudent} />
            <DashboardStudentRoute path="/aluno/solicitacoes/historico" exact component={Solicitations} />
            <DashboardStudentRoute path="/aluno/solicitacoes/:id" exact component={SolicitationSingle} />
            <DashboardEmployeeRoute path="/servidor" exact component={MainEmployee} />
            <Route path="/login" exact component={Login}/>
            <Redirect from="*" to="/login" />
          </Switch>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
