import React,{useEffect, useState} from 'react';
import { Grid,  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//components
import SolicitationTable from '../../components/UnitSingle/SolicitationTable';

//api
import api from '../../service/api';

const useStyles = makeStyles((theme) => ({

}))

export default function UnitSingle() {

  const classes = useStyles()

  const [solicitations, setSolicitations] = useState([]);

  const loadSolicitations = async () => {
    await api.get('/solicitations', 
      { params : { scope: 'unit'} }
    )
    .then((response) => {
      console.log(response.data)
      setSolicitations(response.data.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    loadSolicitations();
  }, [])

  return (
    <>
      <SolicitationTable solicitations={solicitations}/>
    </>
  )
}