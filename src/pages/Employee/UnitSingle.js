import React from 'react';
import { Grid,  } from '@material-ui/core';

//components


//api
import api from '../../service/api';

export default function UnitSingle() {

  const handleClick = (type) => {
    api.post('solicitations', {
      type,
    }).then((response) => {
      console.log(response);
    }).catch((err)=> {
      console.log(err)
    })
  }

  return (
    <>
      página single unit
    </>
  )
}