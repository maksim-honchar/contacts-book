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
    margin: 'auto',
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
        <Typography gutterBottom>
          {name}
        </Typography>
        <Typography>
          {lastname}
        </Typography>
        <Typography>
          {age}
        </Typography>
        <Typography>
          {pager}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">EDIT</Button>
      </CardActions>
    </Card>
  );
};
