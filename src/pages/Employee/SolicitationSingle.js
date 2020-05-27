import React, {useState, useEffect} from 'react';
import { Grid, Typography } from '@material-ui/core';

//components
import SolicitationMenu from '../../components/SolicitationSingle/SolicitationMenu';
import SolicitationInfo from '../../components/SolicitationSingle/SolicitationInfo';
import Documents from '../../components/Documents/Documents';
import DocumentForm from '../../components/Documents/DocumentForm';

//service
import api from '../../service/api';
import FormDialog from '../../components/SolicitationSingle/FormDialog';

export default function SolicitationSingle({location}) {

  const defaultSolicitation = {
    id: '',
    name: '',
    type: '',
    status: '',
    documents: [],
    interested: {},
    created_by: {},
    units: []

  }

  const [solicitation, setSolicitation] = useState(defaultSolicitation)
  const [openDialogForm, setOpenDialogForm] = useState(false)

  const loadSoliciation = async () => {
    const idSolicitation = location.pathname.split('/solicitacoes/')[1]
    await api.get(`solicitations/${idSolicitation}`).then((response) => {
      console.log(response.data)
      setSolicitation(response.data.data)
    })
  }

  const handleSubmitDocument = async (document, unitId) => {
    await api.post(`/solicitations/${solicitation.id}/documents`, document)
      .then((response) => {
        console.log(response)
        loadSoliciation();
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const sendSolicitation = async (unitId) => {
    await api.post(`/solicitations/${solicitation.id}/unit/${unitId}`)
      .then((response) => {
        loadSoliciation();
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
          {
            solicitation.documents.length ? 
            (
              <>
                <Typography variant="subtitle1"> Lista de Documentos da Solicitação</Typography>
                <Documents documents={solicitation.documents}/>
              </>
            ) : (
              <></>
            )
          }
          {
            solicitation.status === 'created' && solicitation.documents.length === 0 ? (
              <DocumentForm handleSubmitDocument={handleSubmitDocument} type={solicitation.type}/>
            ):(
              <>
              </>
            )
          }
          {
            openDialogForm 
              ? <FormDialog 
                  openDialogForm={openDialogForm} 
                  setOpenDialogForm={setOpenDialogForm}
                  handleSubmitDocument={handleSubmitDocument}
                />
              : <></>
          }
        </Grid>
        <Grid item xs={12} sm={3}>
          <SolicitationMenu 
            sendSolicitation={sendSolicitation}
            setOpenDialogForm={setOpenDialogForm}
          />
          <SolicitationInfo solicitation={solicitation}/>
        </Grid>
      </Grid>
    </>
  );
}
