import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Paper, Typography } from '@material-ui/core';

//components
import SolicitationMenu from '../Solicitation/SolicitationMenu';
import Documents from '../Documents/Documents';
import DocumentForm from '../Documents/DocumentForm';

//service
import api from '../../service/api';

const useStyles = makeStyles((theme) => ({
  main_card: {
    fontWeight: theme.typography.fontWeightBold
  },
  header_solicitation: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1)
  }
}));

export default function SolicitationForm({location}) {

  const classes = useStyles();

  const defaultSolicitation = {
    id: '',
    name: '',
    type: '',
    status: '',
    documents: []

  }

  const [solicitation, setSolicitation] = useState(defaultSolicitation)

  const loadSoliciation = async () => {
    console.log(location)
    const idSolicitation = location.pathname.split('/solicitacoes/')[1]
    console.log(idSolicitation)
    await api.get(`solicitations/${idSolicitation}`).then((response) => {
      console.log(response.data)
      setSolicitation(response.data.data)
    })
  }

  const handleSubmitDocument = async (document) => {
    console.log(document)
    await api.post(`/solicitations/${solicitation.id}/documents`, document)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const sendSolicitation = async () => {
    await api.post(`/solicitations/${solicitation.id}/unit/1`)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    loadSoliciation();
  }, [])


  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={9}>
          <Paper className={classes.header_solicitation}>
            <Typography component="p" variant="h6" className={classes.main_card}>
              {solicitation.name}
            </Typography>
            <Typography component="p" variant="subtitle2">
              <Box component='span' fontWeight="fontWeightBold" >Nº: </Box>{solicitation.id}
              <br/>
              <Box component='span' fontWeight="fontWeightBold" >Tipo: </Box>{solicitation.type}
            </Typography>
          </Paper>
          {
            solicitation.status === 'created' ? (
              <DocumentForm handleSubmitDocument={handleSubmitDocument}/>
            ):(
              <></>
            )
          }
          <Documents documents={solicitation.documents}/>
        </Grid>
        <Grid item xs={12} sm={3} spacing={1}>
          <SolicitationMenu sendSolicitation={sendSolicitation}/>
        </Grid>
      </Grid>
    </>
  );
}
