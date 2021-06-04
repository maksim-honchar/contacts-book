import {
  Button, Card, CardActions, CardContent, makeStyles, TextField,
} from '@material-ui/core';
import { nanoid } from '@reduxjs/toolkit';
import React, {
  FC, useState, ChangeEvent, SyntheticEvent,
} from 'react';
import { useHistory } from 'react-router-dom';
import useHooks from '../hooks';
import { addContact } from '../redux/contactsSlice';

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    border: '1px solid red',
    margin: 'auto',
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
      history.push(`/contact/${id}`);
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
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            label="name"
            type="text"
            value={name}
            onChange={changeUserName}
          />
          <TextField
            label="lastname"
            type="text"
            value={lastname}
            onChange={changeUserLastName}
          />
          <TextField
            label="age"
            type="number"
            value={age}
            onChange={changeUserAge}
          />
          <TextField
            label="pager"
            type="number"
            value={pager}
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
