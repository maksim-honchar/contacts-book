import { TableRow, TableCell, makeStyles } from '@material-ui/core';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  tableRow: {
    cursor: 'pointer',
    '&:hover': {
      background: '#fafafa',
    },
  },
});

interface ContactProps {
    name: string
    lastname: string
    age: number
    pager: number
    id: string
}

export const ContactFields: FC<ContactProps> = (props) => {
  const classes = useStyles();

  const {
    name, lastname, age, pager, id,
  } = props;

  const history = useHistory();

  const handleClick = (idContact: string) => history.push(`/contact/${idContact}`);

  return (
    <TableRow className={classes.tableRow} onClick={() => handleClick(id)}>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{lastname}</TableCell>
      <TableCell align="right">{age}</TableCell>
      <TableCell align="right">{pager}</TableCell>
    </TableRow>

  );
};
