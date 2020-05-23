import React,{useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SchoolIcon from '@material-ui/icons/School';
import { Link } from 'react-router-dom';

//actions store
import { getUser } from '../store/ducks/auth';

//import Template
import Dashboard from '../template/Dashboard';

export const listItems = (
  <>
    <ListItem button component={Link} to="/aluno">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Início" />
    </ListItem>
    <ListItem button component={Link} to="/aluno/solicitacoes/historico">
      <ListItemIcon>
        <SchoolIcon />
      </ListItemIcon>
      <ListItemText primary="Histórico" />
    </ListItem>
  </>
);

export default ({children, location}) => {

  const [loading, setLoading] = useState(true);
  const auth = useSelector(state => state.auth, []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    if (auth.user.id !== -1) setLoading(false);
  }, [auth.user.id]);

  if (!loading && (!auth.logged || auth.user.type !== 'Servidor')) {
    return <Redirect to={{ pathname: '/', state: { from: location } }} />;
  }

  if(loading){
    return <>Carregando</>
  }

  return (
    <Dashboard listItems={listItems} title="Aluno">
      {children}
    </Dashboard>
  );
}