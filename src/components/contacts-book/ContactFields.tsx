import { TableRow, TableCell } from '@material-ui/core';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

interface ContactProps {
    name: string
    lastname: string
    age: number
    pager: number
    id: string
}

export const ContactFields: FC<ContactProps> = (props) => {
  const {
    name, lastname, age, pager, id,
  } = props;

  const history = useHistory();

  const handleClick = (idContact: string) => history.push(`/contact/${idContact}`);

  return (
    <TableRow style={{ cursor: 'pointer' }} onClick={() => handleClick(id)}>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{lastname}</TableCell>
      <TableCell align="right">{age}</TableCell>
      <TableCell align="right">{pager}</TableCell>
    </TableRow>

  );
};
