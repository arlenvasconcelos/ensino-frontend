import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme) => ({
  footer: {
    display:"flex",
    justifyContent:"flex-end"
  },
}));

export default function CardCustom({title, body, handleClick, borderColor}) {
  const classes = useStyles();

  return (
    <Card style={{borderTop: `2px solid ${borderColor}`}}>
      <CardContent>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {body}
        </Typography>
      </CardContent>
      <CardActions className={classes.footer}>
        <IconButton color="secondary" aria-label="Nova Solicitação" onClick={handleClick}>
          <AddCircleIcon fontSize="large" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
