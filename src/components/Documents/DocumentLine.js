import React, {useEffect, useState} from 'react';
//material ui
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

//icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//service
import api from '../../service/api';

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  questions: {
    flexDirection: 'column',
    '& *': {
      marginBottom: theme.spacing(1)
    }
  }
}));

export default function DocumentLine ({document}){
  
  const classes = useStyles();

  const [fullDocument, setFulldocument] = useState({})

  const loadDocument = async () => {
    await api.get(`/documents/${document.id}`)
      .then((response) => {
        console.log(response.data)
        setFulldocument(response.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={document.name + document.id}
        id={document.name + document.id}
        onClick={loadDocument}
      >
        <Typography className={classes.heading}>{document.name}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.questions}>
        {
          fullDocument.questions && fullDocument.questions.map((question, key) => (
            <Typography component="p" variant="subtitle2" key={key+question.label}>
              <Box component="span" mr={1} fontWeight="fontWeightBold">
                {question.label}: 
              </Box>
              <Box component="span">
                {question.answer}
              </Box>
            </Typography>
          ))
        }
        
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}