import React, {useState, useEffect} from 'react';
import { Grid } from '@material-ui/core';

//components
import SolicitationMenu from '../../components/SolicitationSingle/SolicitationMenu';
import SolicitationInfo from '../../components/SolicitationSingle/SolicitationInfo';
import Documents from '../../components/SolicitationSingle/Documents';
import DocumentForm from '../../components/Documents/DocumentForm';
import Title from '../../components/Title';

//service
import api from '../../service/api';

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
  const [newDocument, setNewDocument] = useState(false);

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
        setNewDocument(false);
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
                <Title> Lista de Documentos da Solicitação</Title>
                <Documents documents={solicitation.documents}/>
              </>
            ) : (
              <></>
            )
          }
          {
            newDocument ? (
              <DocumentForm handleSubmitDocument={handleSubmitDocument} userType="employee"/>
            ):(
              <>
              </>
            )
          }
        </Grid>
        <Grid item xs={12} sm={3}>
          <SolicitationMenu 
            sendSolicitation={sendSolicitation}
            setNewDocument={setNewDocument}
          />
          <SolicitationInfo solicitation={solicitation}/>
        </Grid>
      </Grid>
    </>
  );
}
