import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import { Grid, Box, Typography  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//components
import CardCustom from '../../components/Utils/CardCustom'
//api
import api from '../../service/api';

//constants
import solicitationType from '../../constants/solicitationType'
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  welcome: {
    fontWeight: theme.typography.fontWeightBold,
  }
}))

export default function MainStudent({location}) {

  const {user} = useSelector(store => store.auth)
  const [newSolicitation, setNewSolicitation] = useState({
    id: "",
    type: "",
    name: ""
  })

  const classes = useStyles()

  const handleClick = (type, name) => {
    console.log(name, type)
    api.post('solicitations', {
      type,
      name,
    }).then((response) => {
      console.log(response.data.data);
      setNewSolicitation(response.data.data);
    }).catch((err)=> {
      console.log(err)
    })
  }

  if (newSolicitation.id){
    return (
      <Redirect 
        to={{ pathname: `/aluno/solicitacoes/${newSolicitation.id}`, state: { from: location } }} 
      />
    )
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <Box p={2} bgcolor="white" boxShadow={1}>
            <Typography component="p" variant="subtitle1" className={classes.welcome}>
              Olá, {user.name}
            </Typography>
            <Typography component="p" variant="subtitle2">
              Seja bem-vindo ao novo sistema de solicitações do Ensino. Através desse recurso
              você poderá fazer várias solicitações de forma rápida e prática. Aproveite uma das
              opções abaixo.
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={4}>
          <CardCustom 
            borderColor="blue"
            title="Documentos Acadêmicos" 
            body="Histórico, atestados, ementas, entre outros documentos acadêmicos"
            handleClick={()=> handleClick(0, solicitationType[0].name)}
          />
        </Grid>
        <Grid item sm={4}>
          <CardCustom 
            borderColor="red"
            title="Auxílio Emergencial" 
            body="Assistencia Estudantil"
            handleClick={()=> handleClick(1, solicitationType[1].name)}
          />
        </Grid>
        <Grid item sm={4}>
          <CardCustom 
            borderColor="black"
            title="Aproveitamento de Disciplinas" 
            body=""
            handleClick={()=> handleClick(2, solicitationType[2].name)}
          />
        </Grid>
        <Grid item sm={4}>
          <CardCustom 
            borderColor="yellow"
            title="Segunda Chamada" 
            body="Solicitar segunda chamada de prova, trabalho ou avaliação"
            handleClick={()=> handleClick(3, solicitationType[3].name)}
          />
        </Grid>
        <Grid item sm={4}>
          <CardCustom 
            borderColor="green"
            title="Justificativa de Faltas"
            body="Subtitulo qualquer"
            handleClick={()=> handleClick(4, solicitationType[4].name)}
          />
        </Grid>
        <Grid item sm={4}>
          <CardCustom 
            borderColor="orange"
            title="Revisão de Atividade" 
            body="Revisão de atividades, provas e avaliações."
            handleClick={()=> handleClick(5, solicitationType[5].name)}
          />
        </Grid>
      </Grid>
    </>
  )
}