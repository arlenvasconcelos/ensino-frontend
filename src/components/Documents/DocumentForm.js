import React, { useEffect, useState } from 'react';

import solicitationType from '../../constants/solicitationType'

export default function DocumentForm({handleSubmitDocument, type}){

  const [form, setForm] = useState(<></>);
  console.log(type)
  
  useEffect(()=>{
    if (solicitationType[type].form !== null)
      setForm({...solicitationType[type].form, props: {handleSubmitDocument}})
  },[])

  return (
    <>
      {form}
    </>
  )

}