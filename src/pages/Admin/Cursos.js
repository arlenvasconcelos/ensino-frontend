import React, {useState, useEffect} from 'react';
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

//components
import CoursesTable from '../../components/Courses/CoursesTable';

//api
import api from '../../service/api'


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  }
}));

export default function Cursos() {

  //css
  const classes = useStyles();

  //useState
  const defaultValue = {
    nome: '',
    tipo: ''
  }
  const [novoCurso, setNovoCurso] = useState(defaultValue);
  const [cursos, setCursos] = useState([]);
  const [error, setError] = useState({
    mensagem: '',
    status:''
  })
  
  //funções
  const loadCursos = () => {
    api.get('/courses').then((response) => {
      console.log(response.data.message)
      console.log(response.data.data)
      setCursos(response.data.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const handleChange = (value, label) => {
    setNovoCurso({...novoCurso, [label]: value})
  }

  const handleSubmit = (e) => {
    if (novoCurso.nome !== ''){
      api.post('/courses', 
        {
          name: novoCurso.nome, 
          type: novoCurso.tipo
        }
      ).then((response) => {
        console.log(response)
        setNovoCurso(defaultValue)
        loadCursos();
      })
      .catch((err) => {
        console.log(err)
      })
    }
    else {
      setError({
        mensagem: "Nome não pode ser vazio",
        status: true
      })
    }
  }

  //useEffects
  useEffect(() => {
    loadCursos()
  },[])

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
                }}
                value={novoCurso.nome}  
                onChange={(e) => handleChange(e.target.value, 'nome')}
              />
              <TextField
                id="standard-full-width"
                label="Tipo"
                style={{ margin: 8, width: "60%" }}
                placeholder="Insira o tipo"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                value={novoCurso.tipo}
                onChange={(e) => handleChange(e.target.value, 'tipo')}
              />
              <Button 
                onClick={(e) => handleSubmit(e)}
                style={{ alignItems: "flex-end", marginTop: "1%" }} 
                variant="contained" 
                color="primary"
              >
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
          <CoursesTable cursos={cursos}/>
        </Paper>
      </Grid>
    </>
  );
}
