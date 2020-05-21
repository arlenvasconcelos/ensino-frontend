import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Table from '../../components/tableCourse';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Cadastrar Curso</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Grid item xs={12}>
          <Typography>
            <Box>
              <TextField
                id="standard-full-width"
                label="Nome"
                style={{ margin: 8, width: "100%" }}
                placeholder="Insira o nome"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}/>
                <TextField
                id="standard-full-width"
                label="Tipo"
                style={{ margin: 8, width: "60%" }}
                placeholder="Insira o tipo"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}/>
                  <Button style={{ alignItems: "flex-end", marginTop: "1%"  }} variant="contained" color="primary">
                    Cadastrar
                  </Button>
                </Box>
          </Typography>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Table />
        </Paper>
      </Grid>
    </>
  );
}
