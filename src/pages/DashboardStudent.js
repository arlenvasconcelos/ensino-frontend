import React,{useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import {Button} from '@material-ui/core';

//actions store
import { getUser } from '../store/ducks/auth';

//import Template
import Dashboard from '../template/Dashboard';

export const navigation = (
  <>
    <Button color="inherit" component={RouterLink} to="/aluno" >
      Início
    </Button>
    <Button color="inherit" component={RouterLink} to="/solicitacoes/historic" >
      Minhas Solicitações
    </Button>
  </>
);

export default ({children, location}) => {

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

  if(loading){
    return <>Carregando</>
  }
  else if(!auth.logged || auth.user.type !== 'Aluno'){
    return <Redirect to={{ pathname: '/', state: { from: location } }} />;
  }

  return (
    <Dashboard navigation={navigation}>
      {children}
    </Dashboard>
  );
}
