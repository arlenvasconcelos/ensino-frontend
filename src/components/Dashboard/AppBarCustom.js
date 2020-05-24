import React from 'react';
import {useDispatch} from 'react-redux'
//materia ui
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

//store
import { signout } from '../../store/ducks/auth';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  logo: {
    marginRight: 36,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function AppBarCustom ({location}) {
  
  const classes = useStyles();

  const dispatch = useDispatch();

  const redirectPage = () => <Redirect to={{ pathname: '/', state: { from: location } }} />

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await dispatch(signout());
      redirectPage();
    } catch (err) {
      console.log(err)
    }
  };


  return (
    <AppBar position="absolute" className={clsx(classes.appBar)}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.logo}>
          Logo IFRS
        </div>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          Ensino
        </Typography>
        <Button color="inherit" onClick={(e) => handleLogout(e)}>
          Minhas Solicitações
        </Button>
        <Button color="inherit" onClick={(e) => handleLogout(e)}>
          Sair
        </Button>
      </Toolbar>
    </AppBar>
  )
}