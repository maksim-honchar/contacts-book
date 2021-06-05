import React, { FC, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useHistory } from 'react-router-dom';
import useHooks from '../../utils/hooks';
import { ContactFields } from './ContactFields';
import { Contact } from '../../utils/types';
import { loadState } from '../../utils/localStorage';
import { contactDelite, fetchContacts } from '../../redux/contactsSlice';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const ContactsBook: FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const { useAppSelector, useAppDispatch } = useHooks();
  const dispatch = useAppDispatch();
  const persistedState = loadState();

  const contacts = useAppSelector((state) => state.contacts.contactsList);
  const status = useAppSelector((state) => state.contacts.status);

  const isFetch = !persistedState && status === 'idle';

  const toEditContact = (id: string) => history.push(`/contact-edit/${id}`);
  const toDeleteContact = (id: string) => dispatch(contactDelite(id));

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
            <TableCell align="right">Actions</TableCell>
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
              toEditContact={toEditContact}
              toDeleteContact={toDeleteContact}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
