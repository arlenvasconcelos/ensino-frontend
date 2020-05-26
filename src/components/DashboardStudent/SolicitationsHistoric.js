import React, {useState, useEffect} from 'react';

//material
import {Box, Typography, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import SolicitationTable from '../Solicitation/SolicitationTable';

//service
import api from '../../service/api';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1)
  }
}));



export default function SolicitationHistoric () {

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
        <Typography component="h6" vartiant="h6">
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