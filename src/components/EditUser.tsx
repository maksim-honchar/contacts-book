import {
  Button, Card, CardActions, CardContent, Grid, makeStyles, TextField,
} from '@material-ui/core';
import React, {
  FC, useState, ChangeEvent, SyntheticEvent,
} from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import useHooks from '../utils/hooks';
import { contactEdit } from '../redux/contactsSlice';
import { Contact } from '../utils/types';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin: 'auto',
  },
  textField: {
    marginBottom: 15,
  },
  btnWrapper: {
    marginBottom: 10,
  },
  btnOk: {
    marginRight: 5,
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

  const toHome = () => history.push('/');

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (canSave) {
      dispatch(contactEdit({
        id, userName, userLastName, userAge, userPager,
      }));
      toHome();
    }
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <form noValidate autoComplete="off">
          <Grid container direction="column">
            <Grid item className={classes.textField}>
              <TextField
                autoFocus
                fullWidth
                label="First Name"
                type="text"
                value={userName}
                onChange={changeUserName}
              />
            </Grid>
            <Grid item className={classes.textField}>
              <TextField
                fullWidth
                label="Last Name"
                type="text"
                value={userLastName}
                onChange={changeUserLastName}
              />
            </Grid>
            <Grid item className={classes.textField}>
              <TextField
                fullWidth
                label="Age"
                type="number"
                value={userAge}
                onChange={changeUserAge}
              />
            </Grid>
            <Grid item className={classes.textField}>
              <TextField
                fullWidth
                label="Pager"
                type="number"
                value={userPager}
                onChange={changeUserPager}
              />
            </Grid>
          </Grid>
        </form>
      </CardContent>
      <CardActions>
        <Grid container justify="flex-end" className={classes.btnWrapper}>
          <Grid item className={classes.btnOk}>
            <Button color="primary" variant="contained" size="small" onClick={handleSubmit}>OK</Button>
          </Grid>
          <Grid item>
            <Button color="primary" variant="outlined" size="small" onClick={toHome}>CANCEL</Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};
