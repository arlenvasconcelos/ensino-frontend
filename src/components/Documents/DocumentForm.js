import React, { useEffect, useState } from 'react';

// import solicitationType from '../../constants/solicitationType';
import { studentForms, employeeForms } from '../../constants/solicitationType';


export default function DocumentForm({handleSubmitDocument, type, userType}){

  const [form, setForm] = useState(<></>);
  console.log(type)
  
  useEffect(()=>{
    if (userType === 'student' && studentForms[type].form !== null)
      setForm({...studentForms[type].form, props: {handleSubmitDocument}})
    else if (userType === 'employee'){
      setForm({...employeeForms[0].form, props: {handleSubmitDocument}})
    }
  },[])

  return (
    <>
      {form}
    </>
  )

}