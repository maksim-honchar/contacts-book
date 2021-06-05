import React, { FC, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useHooks from '../../hooks';
import { ContactFields } from './ContactFields';
import { Contact } from '../../types';
import { loadState } from '../../utils/localStorage';
import { fetchContacts } from '../../redux/contactsSlice';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const ContactsBook: FC = () => {
  const classes = useStyles();
  const { useAppSelector, useAppDispatch } = useHooks();
  const dispatch = useAppDispatch();
  const persistedState = loadState();

  const contacts = useAppSelector((state) => state.contacts.contactsList);
  const status = useAppSelector((state) => state.contacts.status);

  const isFetch = !persistedState && status === 'idle';

  useEffect(() => {
    if (isFetch) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isFetch]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Pager</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((contact: Contact) => (
            <ContactFields
              key={contact.id}
              id={contact.id}
              name={contact.name}
              lastname={contact.lastname}
              age={contact.age}
              pager={contact.pager}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
