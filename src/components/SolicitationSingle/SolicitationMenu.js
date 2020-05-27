import React from 'react';
import { Link } from 'react-router-dom';

//material
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {makeStyles} from '@material-ui/core/styles';

//icons
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import PostAddIcon from '@material-ui/icons/PostAdd';



const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: theme.palette.background.paper,
  }
}))

export default function SolicitationMenu({sendSolicitation, setOpenDialogForm}){

  const classes = useStyles()

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Ações
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button onClick={sendSolicitation}>
        <ListItemIcon>
          <SendIcon color="primary"/>
        </ListItemIcon>
        <ListItemText primary="Enviar" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <MoveToInboxIcon />
        </ListItemIcon>
          <ListItemText primary="Arquivar" />
      </ListItem>
      <Divider />
      <ListItem button onClick={() => setOpenDialogForm(true)}>
        <ListItemIcon>
          <PostAddIcon />
        </ListItemIcon>
          <ListItemText primary="Novo documento" />
      </ListItem>
    </List>
  )
};