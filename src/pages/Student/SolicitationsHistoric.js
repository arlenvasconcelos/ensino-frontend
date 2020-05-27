import React, {useState, useEffect} from 'react';

//material
import {Box, Typography, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import SolicitationTable from '../../components/SolicitationsHistoric/SolicitationTable';

//service
import api from '../../service/api';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));



export default function Solicitations () {

  const classes = useStyles()

  const [solicitations, setSolicitations] = useState([])

  const loadSolicitations = async () =>{
    await api.get('/solicitations').then((response) => {
      console.log(response.data)
      setSolicitations(response.data.data)
    }).catch((err)=> {
      console.log(err)
    })
  }

  useEffect(() => {
    loadSolicitations();
  },[])

  return (
    <>
      <Paper className={classes.root}>
        <Typography component="h6" variant="h6">
          Histórico de Solicitações
        </Typography>
      </Paper>
      {
        solicitations.length 
          ? <SolicitationTable  loadSolicitations={loadSolicitations} solicitations={solicitations}/>
          : <></>
      }
    </>
  )
}