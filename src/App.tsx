import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ContactPage } from './components/contact-page/ContactPage';
import { ContactsBook } from './components/contacts-book/ContactsBook';
import { EditUser } from './components/edit-user/EditUser';
import { NavBar } from './components/NavBar';
import { NewUser } from './components/NewUser';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ContactsBook} />
        <Route exact path="/contact/:contactId" component={ContactPage} />
        <Route exact path="/contact-edit/:contactId" component={EditUser} />
        <Route exact path="/new-user" component={NewUser} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
