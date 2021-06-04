import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useHooks from '../../hooks';
import { Contact } from './Contact';
import { ContactProps } from '../../types';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const ContactsBook: FC = () => {
  const classes = useStyles();
  const { useAppSelector } = useHooks();

  const contacts = useAppSelector((state) => state.contacts);

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
          {contacts.map((contact: ContactProps) => (
            <Contact
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
