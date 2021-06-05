import {
  TableRow, TableCell, makeStyles, IconButton,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import React, { FC } from 'react';

const useStyles = makeStyles({
  deliteIcon: {
    '&:hover': {
      background: '#fbe9e7',
    },
  },
});

interface ContactProps {
    name: string
    lastname: string
    age: number
    pager: number
    id: string
    toEditContact: (id: string) => void
    toDeleteContact: (id: string) => void
}

export const ContactFields: FC<ContactProps> = (props) => {
  const classes = useStyles();

  const {
    name, lastname, age, pager, id, toEditContact, toDeleteContact,
  } = props;

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{lastname}</TableCell>
      <TableCell align="right">{age}</TableCell>
      <TableCell align="right">{pager}</TableCell>
      <TableCell align="right">
        <IconButton
          onClick={() => toEditContact(id)}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          className={classes.deliteIcon}
          onClick={() => toDeleteContact(id)}
        >
          <DeleteForeverIcon />
        </IconButton>
      </TableCell>
    </TableRow>

  );
};
