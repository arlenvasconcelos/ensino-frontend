import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

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
  createData("sd", "101", "321")
];

export default function TableUnit() {
  return (
    <React.Fragment>
      <Title>Unidades</Title>
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
              <Button><EditIcon /></Button>
              <Button><DeleteIcon /></Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}