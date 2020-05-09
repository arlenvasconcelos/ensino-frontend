import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(nome, sala, phone ) {
  return { 
    nome, 
    sala, 
    phone: phone 
  };
}

const rows = [
  createData("CRE", '101', '214'),
  createData("OE", '101', '214'),
];

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Unnidades</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Unidade</TableCell>
            <TableCell>Sala</TableCell>
            <TableCell>Fone/Ramal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row , key) => (
            <TableRow key={key}>
              <TableCell>{row.nome}</TableCell>
              <TableCell>{row.sala}</TableCell>
              <TableCell>{row.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
