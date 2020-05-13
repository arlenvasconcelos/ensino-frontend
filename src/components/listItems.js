import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SchoolIcon from '@material-ui/icons/School';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/admin/unidade">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Unidades" />
    </ListItem>
    <ListItem button component={Link} to="/admin/cursos">
      <ListItemIcon>
        <SchoolIcon />
      </ListItemIcon>
        <ListItemText primary="Cursos" />
    </ListItem>
  </div>
);


