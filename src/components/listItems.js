import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SchoolIcon from '@material-ui/icons/School';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Unidades" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SchoolIcon />
      </ListItemIcon>
      <ListItemLink href="#simple-list">
        <ListItemText primary="Cursos" />
      </ListItemLink>
    </ListItem>
  </div>
);


