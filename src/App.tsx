import { Container } from '@material-ui/core';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { ContactsBook } from './components/contacts-book/ContactsBook';
import { EditUser } from './components/EditUser';
import { NavBar } from './components/NavBar';
import { NewUser } from './components/NewUser';

function App() {
  return (
    <Container maxWidth="md">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ContactsBook} />
          <Route exact path="/contact-edit/:contactId" component={EditUser} />
          <Route exact path="/new-user" component={NewUser} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
