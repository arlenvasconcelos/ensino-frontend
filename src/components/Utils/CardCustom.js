import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  footer: {
    display:"flex",
    justifyContent:"flex-end"
  }
});

export default function CardCustom({title, body, handleClick, borderColor}) {
  const classes = useStyles();

  return (
    <Card style={{borderTop: `5px solid ${borderColor}`}}>
      <CardContent>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {body}
        </Typography>
      </CardContent>
      <CardActions className={classes.footer}>
        <Button 
          variant="contained"
          color="primary"
          size="small"
          onClick={handleClick}
        >
          Clique aqui
        </Button>
      </CardActions>
    </Card>
  );
}
