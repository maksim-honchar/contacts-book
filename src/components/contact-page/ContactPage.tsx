import {
  Typography, Button, makeStyles, Paper, TableContainer, Divider, Table, Grid,
} from '@material-ui/core';
import React, { FC } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import useHooks from '../../utils/hooks';
import { Contact } from '../../utils/types';
import { TableContant } from './TableContent';

const useStyles = makeStyles({
  table: {
    maxWidth: 400,
    minHeight: 300,
    margin: 'auto',
    background: 'white',
  },
  btnWrapper: {
    margin: '20px auto',
  },
  btnBack: {
    margin: '0 10px 10px 5px',
  },
  titleTable: {
    paddingTop: 10,
  },
});

interface MatchParams {
    contactId: string;
}

export const ContactPage: FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const classes = useStyles();
  const { contactId } = match.params;
  const { useAppSelector } = useHooks();
  const history = useHistory();

  const currentUser = useAppSelector(({ contacts: { contactsList } }) => contactsList
    .find((user: Contact) => user.id === contactId));

  const {
    name, lastname, age, pager, id,
  } = currentUser;

  const handleClick = () => history.push(`/contact-edit/${id}`);
  const toHome = () => history.push('/');

  return (
    <div className={classes.table}>
      <Paper>
        <Typography
          className={classes.titleTable}
          align="center"
          variant="h4"
          color="textSecondary"
        >
          Contact
        </Typography>
      </Paper>
      <Divider />
      <TableContainer component={Paper}>
        <Table>
          <TableContant
            name={name}
            lastname={lastname}
            age={age}
            pager={pager}
          />
        </Table>
      </TableContainer>
      <Grid container justify="flex-end" className={classes.btnWrapper}>
        <Grid item>
          <Button color="primary" variant="contained" size="small" onClick={handleClick}>OK</Button>
        </Grid>
        <Grid item className={classes.btnBack}>
          <Button color="primary" variant="outlined" size="small" onClick={toHome}>BACK</Button>
        </Grid>
      </Grid>
    </div>

  );
};
