import React, { useState, useEffect } from 'react';

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

const initialUnitId = 1;

export default function FormOne({handleSubmitDocument}){

  const classes = useStyles();

  const document = {
    type: 'Formulário', 
    name: 'Parecer', 
  }
  const [question, setQuestion] = useState({ label: 'Texto:', answer: '', })

  const handleQuestion = (e) => {
    setQuestion({...question, 'answer': e.target.value })
  }

  const handleSubmit = async (e) => {
    
    e.preventDefault()
    handleSubmitDocument({
      ...document,
      questions: [question]
    }, initialUnitId)
  }


  return (
    <>
      <Paper className={classes.root}>
        <Typography component="h6" variant="h6" className={classes.title}>
          {document.name}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>  
          <FormControl >
           <TextField
              id="filled-full-width"
              label={document.name}
              style={{ margin: 8 }}
              placeholder=""
              // helperText="Full width!"
              multiline
              rows={4}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              onChange={(e) => handleQuestion(e)}
            />
          </FormControl>
          <div className={classes.action}>
            <Button
              type="submit"
              variant="contained" 
              color="secondary"
              disabled = {!question.answer}
            >
              Enviar
            </Button>
          </div>
        </form>
      </Paper>
    </>
  )
}