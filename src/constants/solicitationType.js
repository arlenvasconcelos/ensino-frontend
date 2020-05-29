import React from 'react'
import FormOne from '../components/Forms/FormOne'
import DefaultForm from '../components/Forms/DefaultForm'

const studentForms = [
  {
    name: "Solicitação de Documentos Acadêmicos",
    form: <FormOne handleSubmitDocument/>
  },
  {
    name: "Solicitação de Auxílio Emergencial",
    form: null
  },
  {
    name: "Solicitação de Aproveitamento de Disciplinas",
    form: null
  },
  {
    name: "Solicitação de Segunda Chamada",
    form: null
  },
  {
    name: "Solicitação de Justificativa de Faltas",
    form: null
  },
  {
    name: "Solicitação de Revisão de Atividades",
    form: null
  },
]

const employeeForms = [
  {
    name: "Parecer",
    form: <DefaultForm handleSubmitDocument/>
  }
]
export {studentForms, employeeForms}