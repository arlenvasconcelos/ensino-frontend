import React, { useState } from 'react';

//material
import { 
  Paper, Typography, FormControl,
  TextField, FormGroup, FormControlLabel, 
  Radio, RadioGroup, FormLabel, Checkbox,
  Button
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formControl: {
    marginBottom: theme.spacing(3),
    minWidth: 120,
  },
  title: {
    marginBottom: theme.spacing(2)
  },
  action: {
    alignSelf: 'flex-end',
    '& *': {
      marginLeft: theme.spacing(1)
    }
  }
}))

export default function DocumentForm({handleSubmitDocument}){

  const classes = useStyles();

  const [document, setDocument] = useState({
    type: 'Formulário', 
    name: 'Formulário de Solicitação de Documentos Acadêmicos', 
    questions: []})
  const [question_1, setQuestion_1] = useState({ label: 'O que você precisa?', answer: '', })
  const [question_2, setQuestion_2] = useState(
    { 
      label: 'Quais documentos abaixo?', 
      answer: [], 
      options: {
        0: ['Histórico', 'Ementas'],
        1: ['Atestado de Matrícula', 'Atestado de Frequência', 'Atestado de Atividade escolar'],
      }
    }
  );
  const [question_3, setQuestion_3] = useState({ label: 'Observações', answer: '', })

  const handleQuestion_1 = (e) => {
    setQuestion_1({...question_1, 'answer': e.target.value })
    setQuestion_2({...question_2, 'answer': []})
  }

  const handleQuestion_2 = (e, value) => {
    setQuestion_2(question_2 => ({ ...question_2,
      answer: question_2.answer.includes(value)
          ? question_2.answer.filter(c => c !== value)
          : [...question_2.answer, value]
      })
    );
  }

  const handleQuestion_3 = (e, value) => {
    setQuestion_3({...question_3, 'answer': e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const questionFormatted = {
      label: question_2.label,
      answer: question_2.answer.toString(),
    }
    setDocument({
      ...document, 
      questions: [question_1, questionFormatted, question_3]
    })

    handleSubmitDocument(document);
  }

  return (
    <>
      <Paper className={classes.root}>
        <Typography component="h6" variant="h6" className={classes.title}>
          {document.name}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>  
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel>{question_1.label}</FormLabel>
            <RadioGroup 
              aria-label="question_1" 
              name="question_1" 
              value={question_1['answer']} 
              onChange={handleQuestion_1}>
              <FormControlLabel value="Historico/Ementas" control={<Radio />} label="Histórico/Ementas" />
              <FormControlLabel value="Atestados" control={<Radio />} label="Atestados" />
            </RadioGroup>
          </FormControl>
          {
            question_1.answer ? (
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend" >Quais Documentos?</FormLabel>
                <FormGroup>
                  {
                    question_1.answer === 'Historico/Ementas' && question_2.options[0].map(x =>
                      <FormControlLabel
                        key={x.toString()}
                        control={
                          <Checkbox
                            value={x}
                            onChange={e => handleQuestion_2(e, x)}
                            checked={question_2.answer.includes(x)}
                          />
                        }
                        label={x}
                      />
                    )
                  }
                  {
                    question_1.answer === 'Atestados' && question_2.options[1].map(x =>
                      <FormControlLabel
                        key={x.toString()}
                        control={
                          <Checkbox
                            value={x} key={x.toString()}
                            onChange={e => handleQuestion_2(e, x)}
                            checked={question_2.answer.includes(x)}
                          />
                        }
                        label={x}
                      />
                    )
                  }
                </FormGroup>
              </FormControl>
            ):(
              <></>
            )
          }
          <TextField
            className={classes.formControl}
            id="standard-multiline-static"
            label="Observações"
            variant="outlined"
            multiline
            rows={4}
            value={question_3.answer}
            onChange={handleQuestion_3}
          />
          <div className={classes.action}>
            <Button
              type="submit"
              variant="contained" 
              color="secondary"
              disabled = {!question_1.answer || !question_2.answer.length}
            >
              Enviar
            </Button>
          </div>
        </form>
      </Paper>
    </>
  )
}