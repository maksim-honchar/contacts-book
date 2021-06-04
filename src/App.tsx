import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ContactPage } from './components/contact-page/ContactPage';
import { ContactsBook } from './components/contacts-book/ContactsBook';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ContactsBook} />
        <Route exact path="/contact/:contactId" component={ContactPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
