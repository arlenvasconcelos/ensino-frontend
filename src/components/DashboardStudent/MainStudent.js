import React from 'react';
import { Grid,  } from '@material-ui/core';
//components
import CardCustom from '../Utils/CardCustom'
//api
import api from '../../service/api';

export default function MainStudent() {

  const handleClick = (type) => {
    api.post('solicitations', {
      type,
    }).then((response) => {
      console.log(response);
    }).catch((err)=> {
      console.log(err)
    })
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <CardCustom 
            title="Solicitação de Documentos" 
            body="Solicitar histórico, atestados, ementas, entre outros documentos acadêmicos"
            handleClick={()=> handleClick("Solicitação de Documentos")}
          />
        </Grid>
        
      </Grid>
      
    </>
  )
}