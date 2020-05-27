import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//constants
import solicitationStatus from '../../constants/solicitationStatus';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  item: {
    marginTop: theme.spacing(2)
  }
}));


export default function SolicitationInfo({solicitation}){

  const classes = useStyles()

  console.log(solicitation)

  return( 
    <>
      <div className={classes.root}>
        <Box fontSize="subtitle1.fontSize" fontWeight="fontWeightBold">
          Informações da Solicitação
        </Box>
        <Typography variant="body2" className={classes.item}>
          <Box component="span" color="text.secondary" fontWeight="fontWeightBold">ID: </Box>
          <Box component="span" fontWeight="fontWeightBold">{solicitation.id}</Box>
        </Typography>
        <Typography variant="body2" className={classes.item}>
          <Box component="span" color="text.secondary" fontWeight="fontWeightBold">Nome: </Box>
          <Box component="span" fontWeight="fontWeightBold">{solicitation.name}</Box>
        </Typography>
        <Typography variant="body2" className={classes.item}>
          <Box component="span" color="text.secondary" fontWeight="fontWeightBold">Interessado: </Box>
          <Box component="span" fontWeight="fontWeightBold">{solicitation.interested.name}</Box>
        </Typography>
        <Typography variant="body2" className={classes.item}>
          <Box component="span" color="text.secondary" fontWeight="fontWeightBold">Criado por: </Box>
          <Box component="span" fontWeight="fontWeightBold">{solicitation.created_by.name}</Box>
        </Typography>
        <Typography variant="body2" className={classes.item}>
          <Box component="span" color="text.secondary" fontWeight="fontWeightBold">Status: </Box>
          <Box component="span" fontWeight="fontWeightBold">
            {solicitationStatus[solicitation.status]}
          </Box>
        </Typography>
        <Typography variant="body2" className={classes.item}>
          <Box component="span" color="text.secondary" fontWeight="fontWeightBold">Quantidade de documentos: </Box>
          <Box component="span" fontWeight="fontWeightBold">{solicitation.documents.length}</Box>
        </Typography>
        <Typography variant="body2" className={classes.item}>
          <Box component="span" color="text.secondary" fontWeight="fontWeightBold">Criado em: </Box>
          <Box component="span" fontWeight="fontWeightBold">{solicitation.created_at}</Box>
        </Typography>
      </div>
    </>
  )
}