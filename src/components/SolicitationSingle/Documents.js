import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//components
import DocumentLine from '../Documents/DocumentLine';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}));

export default function Documents({documents}) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {documents.length && documents.map((document, key) => (
        <DocumentLine key={document.name + key} document={document}/>
      ))}
    </div>
  );
}
