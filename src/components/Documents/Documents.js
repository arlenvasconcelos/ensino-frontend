import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Documents({documents}) {


  const classes = useStyles();

  return (
    <div className={classes.root}>
      {documents.length && documents.map((document) => (
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={document.name + document.id}
            id={document.name + document.id}
          >
            <Typography className={classes.heading}>{document.name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {
              document.questions && document.questions.map((question, key) => (
                <Typography key={key+question.label}>
                  {question.label + ": " + question.answer}
                </Typography>
              ))
            }
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
}
