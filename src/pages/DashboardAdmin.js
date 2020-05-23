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
    <ListItem button component={Link} to="/admin/cursos">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Cursos" />
    </ListItem>
    <ListItem button component={Link} to="/admin/unidades">
      <ListItemIcon>
        <SchoolIcon />
      </ListItemIcon>
      <ListItemText primary="Unidades" />
    </ListItem>
  </>
);

export default function DashboardAdmin({children, location}) {

  const [loading, setLoading] = useState(true);
  const auth = useSelector(state => state.auth, []);
  const dispatch = useDispatch();

  const validateUser = async () => {
    try{
      setLoading(true)
      await dispatch(getUser());
      setLoading(false)
    }catch(err){
      setLoading(false)
    }
  }

  useEffect(() => {
    validateUser();
  }, []);

  console.log(auth)

  if(loading){
    return <>Carregando</>
  }
  else if(!auth.logged || auth.user.type !== 'Admin'){
    return <Redirect to={{ pathname: '/', state: { from: location } }} />;
  }


  return (
    <Dashboard listItems={listItems} title="Servidor">
      {children}
    </Dashboard>
  );
}