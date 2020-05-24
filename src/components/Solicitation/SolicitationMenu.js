import React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles} from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SchoolIcon from '@material-ui/icons/School';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: theme.palette.background.paper,
  }
}))

export default function SolicitationMenu(){

  const classes = useStyles()

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Menu
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button component={Link} to="/admin/unidade">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Enviar" />
      </ListItem>
      <ListItem button component={Link} to="/admin/cursos">
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
          <ListItemText primary="Arquivar" />
      </ListItem>
    </List>
  )
};