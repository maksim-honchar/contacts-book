import {
  Card, CardContent, Typography, CardActions, Button, makeStyles,
} from '@material-ui/core';
import React, { FC } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import useHooks from '../../hooks';

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    border: '1px solid red',
    margin: 'auto',
  },
});

interface MatchParams {
    contactId: string;
}

export const ContactPage: FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const classes = useStyles();
  const { contactId } = match.params;
  const { useAppSelector } = useHooks();
  const history = useHistory();

  const currentUser = useAppSelector((state) => state.contacts
    .find((user) => user.id === contactId));

  const {
    name, lastname, age, pager, id,
  } = currentUser;

  const handleClick = () => history.push(`/contact-edit/${id}`);

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
        <Button size="small" onClick={handleClick}>EDIT</Button>
      </CardActions>
    </Card>
  );
};
