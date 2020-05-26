import React, {useEffect, useState} from 'react';
import { Link as RouterLink} from 'react-router-dom';

//material
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Typography, Button, ButtonGroup} from '@material-ui/core';

//icons
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';

//service
import api from '../../service/api';

const useStyles = makeStyles((theme) => ({
  table: {
    // minWidth: 650,
  },
  title: {
    flex: '1 1 100%',
    padding: theme.spacing(2)
  }
}));



export default function SimpleTable({solicitations, loadSolicitations}) {


  const classes = useStyles();
  const [solicitationsCreated, setSolicitationsCreated] = useState([])
  const [solicitationsSent, setSolicitationsSent] = useState([])


  useEffect(() => {
    setSolicitationsCreated(solicitations.filter((e => e.status === 'created')))
    setSolicitationsSent(solicitations.filter((e => e.status === 'sent')))
    
  }, [solicitations])

  const handleDelete = (id) => {
    api.delete(`/solicitations/${id}`)
      .then((response) => {
        console.log(response)
        loadSolicitations();
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  return (
    <>
    <TableContainer component={Paper}>
      <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Solicitações não enviadas
        </Typography>
      <Table className={classes.table} aria-label="simple table">
        <TableHead title={'OK'}>
          <TableRow >
            <TableCell  >ID</TableCell>
            <TableCell align="center">Tipo</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Criado em</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {solicitationsCreated.map((row, key) => (
            <TableRow key={row.name + key}>
              <TableCell>
                {row.id}
              </TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.status === 'created' ? "Criada" : "Em andamento"}</TableCell>
              <TableCell align="center">{row.created_at}</TableCell>
              <TableCell align="center">
                <ButtonGroup variant="outlined" aria-label="acoes">
                  <Button component={RouterLink} to={`/aluno/solicitacoes/${row.id}`}>
                    <VisibilityIcon color="action"/>
                  </Button>
                  <Button onClick={() => handleDelete(row.id)}>
                    <DeleteIcon color="secondary"/>
                  </Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
