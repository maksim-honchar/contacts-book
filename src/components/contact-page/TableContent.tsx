import {
  TableBody, TableRow, TableCell, Typography,
} from '@material-ui/core';
import React, { FC } from 'react';

interface TableContentProps {
    name: string
    lastname: string
    age: number
    pager: number
}

export const TableContant: FC<TableContentProps> = (props) => {
  const {
    name, lastname, age, pager,
  } = props;

  return (
    <TableBody>
      <TableRow>
        <TableCell>
          <Typography color="textSecondary" align="center">
            name:
          </Typography>
        </TableCell>
        <TableCell>
          <Typography>
            {name}
          </Typography>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Typography color="textSecondary" align="center">
            last name:
          </Typography>
        </TableCell>
        <TableCell>
          <Typography>
            {lastname}
          </Typography>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Typography color="textSecondary" align="center">
            age:
          </Typography>
        </TableCell>
        <TableCell>
          <Typography>
            {age}
          </Typography>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Typography color="textSecondary" align="center">
            pager:
          </Typography>
        </TableCell>
        <TableCell>
          <Typography>
            {pager}
          </Typography>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};
