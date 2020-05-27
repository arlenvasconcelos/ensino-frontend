import React, { useEffect, useState } from 'react';

import solicitationType from '../../constants/solicitationType'

export default function DocumentForm({handleSubmitDocument, type}){

  const [form, setForm] = useState();
  console.log(type)
  
  useEffect(()=>{
    setForm(solicitationType[type].form)
  },[])

  console.log(form)
  return (
    <>
      {form}
    </>
  )

}