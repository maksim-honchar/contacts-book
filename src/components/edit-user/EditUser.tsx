import {
  Button, Card, CardActions, CardContent, makeStyles, TextField,
} from '@material-ui/core';
import React, {
  FC, useState, ChangeEvent, SyntheticEvent,
} from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import useHooks from '../../hooks';
import { contactEdit } from '../../redux/contactsSlice';
import { Contact } from '../../types';

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

export const EditUser: FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const classes = useStyles();
  const { contactId } = match.params;
  const { useAppSelector, useAppDispatch } = useHooks();
  const dispatch = useAppDispatch();
  const history = useHistory();

  const currentUser = useAppSelector(({ contacts: { contactsList } }) => contactsList
    .find((user: Contact) => user.id === contactId));

  const {
    name, lastname, age, pager, id,
  } = currentUser;

  const [userName, editUserName] = useState(name);
  const [userLastName, editUserLastName] = useState(lastname);
  const [userAge, editUserAge] = useState<string | number>(age);
  const [userPager, editUserPager] = useState<string | number>(pager);

  const changeUserName = (e: ChangeEvent<HTMLInputElement>) => editUserName(e.target.value);
  const changeUserLastName = (e: ChangeEvent<HTMLInputElement>) => editUserLastName(e.target.value);
  const changeUserAge = (e: ChangeEvent<HTMLInputElement>) => editUserAge(e.target.value);
  const changeUserPager = (e: ChangeEvent<HTMLInputElement>) => editUserPager(e.target.value);

  const canSave = userName && userLastName && userAge && userPager;

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (canSave) {
      dispatch(contactEdit({
        id, userName, userLastName, userAge, userPager,
      }));
      history.push(`/contact/${id}`);
    }
  };

  const handleCancel = () => history.push(`/contact/${id}`);

  return (
    <Card className={classes.root}>
      <CardContent>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            label="name"
            type="text"
            value={userName}
            onChange={changeUserName}
          />
          <TextField
            label="lastname"
            type="text"
            value={userLastName}
            onChange={changeUserLastName}
          />
          <TextField
            label="age"
            type="number"
            value={userAge}
            onChange={changeUserAge}
          />
          <TextField
            label="pager"
            type="number"
            value={userPager}
            onChange={changeUserPager}
          />
        </form>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleSubmit}>OK</Button>
        <Button size="small" onClick={handleCancel}>CANCEL</Button>
      </CardActions>
    </Card>
  );
};
