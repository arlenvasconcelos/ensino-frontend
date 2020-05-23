import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SchoolIcon from '@material-ui/icons/School';
import { Link } from 'react-router-dom';

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

export default ({children}) => {

  return (
    <Dashboard listItems={listItems} title="Aluno">
      {children}
    </Dashboard>
  );
}
