import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Box} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: '100%',
  },
}));

export default function SolicitationForm() {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <form noValidate autoComplete="off">
        <Box m={1}>
          <TextField
            error
            id="outlined-error"
            label="Error"
            defaultValue="Hello World"
            variant="outlined"
          />
        </Box>
      </form>
    </Card>
  );
}
