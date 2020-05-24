import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography } from '@material-ui/core';

//components
import SolicitationMenu from '../Solicitation/SolicitationMenu';
import SolicitationSingle from '../Solicitation/SolicitationSingle';

const useStyles = makeStyles((theme) => ({
  content: {
    '&* ': {
      marginBottom: theme.spacing(1),
    }
  },
  main_card: {
    fontWeight: theme.typography.fontWeightBold
  }
}));

export default function SolicitationForm({location}) {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={2}>
          <SolicitationMenu/>
        </Grid>
        <Grid item xs={12} sm={10} classeName={classes.content}>
          <Box p={2} bgcolor="white" boxShadow={1} marginBottom={1}>
            <Typography component="p" variant="subtitle1" className={classes.main_card}>
              Dados da Solicitação
            </Typography>
            <Typography component="p" variant="subtitle2">
              ....Mostrar dados da solicitação....
            </Typography>
          </Box>
          <SolicitationSingle/>
        </Grid>
      </Grid>
    </>
  );
}
