import {
  Button, Card, CardActions, CardContent, Grid, makeStyles, TextField,
} from '@material-ui/core';
import { nanoid } from '@reduxjs/toolkit';
import React, {
  FC, useState, ChangeEvent, SyntheticEvent,
} from 'react';
import { useHistory } from 'react-router-dom';
import useHooks from '../utils/hooks';
import { addContact } from '../redux/contactsSlice';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    minHeight: 300,
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

export const NewUser: FC = () => {
  const classes = useStyles();
  const { useAppDispatch } = useHooks();
  const dispatch = useAppDispatch();
  const history = useHistory();

  const [name, setUserName] = useState('');
  const [lastname, setUserLastName] = useState('');
  const [age, setUserAge] = useState<string | number>('');
  const [pager, setUserPager] = useState<string | number>('');
  const ageToNum = +age;
  const pagerToNum = +pager;

  const changeUserName = (e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value);
  const changeUserLastName = (e: ChangeEvent<HTMLInputElement>) => setUserLastName(e.target.value);
  const changeUserAge = (e: ChangeEvent<HTMLInputElement>) => setUserAge(e.target.value);
  const changeUserPager = (e: ChangeEvent<HTMLInputElement>) => setUserPager(e.target.value);

  const canSave = name && lastname && age && pager;

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (canSave) {
      const id = nanoid();
      dispatch(addContact({
        id, name, lastname, age: ageToNum, pager: pagerToNum,
      }));
      history.push('/');
    }
  };

  const handleCancel = () => {
    setUserName('');
    setUserLastName('');
    setUserAge('');
    setUserPager('');
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
                value={name}
                onChange={changeUserName}
              />
            </Grid>
            <Grid item className={classes.textField}>
              <TextField
                fullWidth
                label="Last Name"
                type="text"
                value={lastname}
                onChange={changeUserLastName}
              />
            </Grid>
            <Grid item className={classes.textField}>
              <TextField
                fullWidth
                label="Age"
                type="number"
                value={age}
                onChange={changeUserAge}
              />
            </Grid>
            <Grid item className={classes.textField}>
              <TextField
                fullWidth
                label="Pager"
                type="number"
                value={pager}
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
            <Button color="primary" variant="outlined" size="small" onClick={handleCancel}>CANCEL</Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};
