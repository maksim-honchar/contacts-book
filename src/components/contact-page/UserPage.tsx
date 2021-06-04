import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    border: '1px solid red',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

interface UserPageProps {
    currentUser: {
        name: string,
        lastname: string,
        age: number,
        pager: number,
        id: string
    }
}

export const UserPage:FC<UserPageProps> = ({ currentUser }) => {
  const classes = useStyles();
  const {
    name, lastname, age, pager, id,
  } = currentUser;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {name}
        </Typography>
        <Typography variant="h5" component="h2" />
        <Typography className={classes.pos} color="textSecondary" />
        <Typography variant="body2" component="p">
          TEs
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
