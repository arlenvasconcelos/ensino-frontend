import React, {useState, useEffect} from 'react';
import api from '../../service/api';

export default function SolicitationHistoric () {


  useEffect(() => {
    api.get('/solicitations').then((response) => {
      console.log(response)
      // this.setState({solicitations: })
    }).catch((err)=> {
      console.log(err)
    })
  })

  return (
    <>
      Histórico de Solicitações
    </>
  )
}