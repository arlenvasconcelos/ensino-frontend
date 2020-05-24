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
        <Grid item sm={4}>
          <CardCustom 
            borderColor="blue"
            title="Documentos Acadêmicos" 
            body="Histórico, atestados, ementas, entre outros documentos acadêmicos"
            handleClick={()=> handleClick("Solicitação de Documentos")}
          />
        </Grid>
        <Grid item sm={4}>
          <CardCustom 
            borderColor="red"
            title="Auxílio Emergencial" 
            body="Assistencia Estudantil"
            handleClick={()=> handleClick("Solicitação de Documentos")}
          />
        </Grid>
        <Grid item sm={4}>
          <CardCustom 
            borderColor="black"
            title="Aproveitamento de Disciplinas" 
            body=""
            handleClick={()=> handleClick("Solicitação de Documentos")}
          />
        </Grid>
        <Grid item sm={4}>
          <CardCustom 
            borderColor="yellow"
            title="Segunda Chamada" 
            body="Solicitar segunda chamada de prova, trabalho ou avaliação"
            handleClick={()=> handleClick("Solicitação de Documentos")}
          />
        </Grid>
        <Grid item sm={4}>
          <CardCustom 
            borderColor="green"
            title="Justificativa de Faltas"
            body="Subtitulo qualquer"
            handleClick={()=> handleClick("Solicitação de Documentos")}
          />
        </Grid>
        <Grid item sm={4}>
          <CardCustom 
            borderColor="orange"
            title="Revisão de Atividade" 
            body="Revisão de atividades, provas e avaliações."
            handleClick={()=> handleClick("Solicitação de Documentos")}
          />
        </Grid>
        
      </Grid>
      
    </>
  )
}