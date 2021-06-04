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
          {contacts.map(({
            id, name, lastname, age, pager,
          }) => (

            <Contact
              key={id}
              id={id}
              name={name}
              lastname={lastname}
              age={age}
              pager={pager}
            />

          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
