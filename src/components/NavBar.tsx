import React, { FC } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ContactsIcon from '@material-ui/icons/Contacts';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { useHistory } from 'react-router-dom';
import { newUser } from '../utils/constants';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 350,
    margin: 'auto',
    marginBottom: 20,
  },
});

export const NavBar: FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
    setValue(newValue);
  };

  const toHome = () => history.push('/');
  const toNewUser = () => history.push(newUser);

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab icon={<ContactsIcon />} label="CONTACTS" onClick={toHome} />
        <Tab icon={<PersonAddIcon />} label="ADD CONTACT" onClick={toNewUser} />
      </Tabs>
    </Paper>
  );
};
