import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Paper, Typography } from '@material-ui/core';

//components
import SolicitationMenu from '../../components/SolicitationSingle/SolicitationMenu';
import SolicitationInfo from '../../components/SolicitationSingle/SolicitationInfo';
import Documents from '../../components/Documents/Documents';
import DocumentForm from '../../components/Documents/DocumentForm';

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

export default function SolicitationSingle({location}) {

  const classes = useStyles();

  const defaultSolicitation = {
    id: '',
    name: '',
    type: '',
    status: '',
    documents: [],
    interested: {},
    created_by: {}

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
        loadSoliciation()
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
          <Typography variant="subtitle1"> Lista de Documentos da Solicitação</Typography>
          <Documents documents={solicitation.documents}/>
          {
            solicitation.status === 'created' && solicitation.documents.length === 0 ? (
              <DocumentForm handleSubmitDocument={handleSubmitDocument}/>
            ):(
              <></>
            )
          }
        </Grid>
        <Grid item xs={12} sm={3}>
          <SolicitationMenu sendSolicitation={sendSolicitation}/>
          <SolicitationInfo solicitation={solicitation}/>
        </Grid>
      </Grid>
    </>
  );
}
