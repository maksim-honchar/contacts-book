import React, { FC } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ContactsIcon from '@material-ui/icons/Contacts';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 350,
    margin: 'auto',
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
  const toNewUser = () => history.push('/new-user');

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
      >
        <Tab icon={<ContactsIcon />} label="CONTACTS" onClick={toHome} />
        <Tab icon={<PersonAddIcon />} label="ADD CONTACT" onClick={toNewUser} />
      </Tabs>
    </Paper>
  );
};
