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

//constants
import solicitationStatus from '../../constants/solicitationStatus';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    borderLeft: '3px solid green'
  },
  title: {
    flex: '1 1 100%',
    padding: theme.spacing(2)
  }
}));



export default function SimpleTable({solicitations}) {


  const classes = useStyles();


  return (
    <>
    <TableContainer className={classes.root} component={Paper}>
      <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
        Solicitações recebidas
      </Typography>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow variant="head">
            <TableCell>ID</TableCell>
            <TableCell align="center">Nome</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Criado em</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {solicitations.map((row, key) => (
            <TableRow key={row.name + key} >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{solicitationStatus[row.status]}</TableCell>
              <TableCell align="center">{row.created_at}</TableCell>
              <TableCell align="center">
                <ButtonGroup variant="outlined" aria-label="acoes">
                  <Button component={RouterLink} to={`/servidor/solicitacoes/${row.id}`}>
                    <VisibilityIcon color="action"/>
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
