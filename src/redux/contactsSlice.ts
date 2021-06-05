import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createServer } from 'miragejs';
import {
  failded, loading, succeeded, urlFakeApi,
} from '../utils/constants';
import { Contact, InitialState } from '../utils/types';
import contactsData from '../utils/data.json';
import { loadState } from '../utils/localStorage';

createServer({
  routes() {
    this.get(urlFakeApi, () => contactsData);
  },
});

const persistedState = loadState();

const initialState: InitialState = {
  contactsList: persistedState?.contacts.contactsList || [],
  status: 'idle',
  error: null,
};

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const response = await fetch(urlFakeApi);
  const result = await response.json();
  return result;
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.contactsList = state.contactsList.concat(action.payload);
    },
    contactEdit(state, action) {
      const {
        id, userName, userLastName, userAge, userPager,
      } = action.payload;
      const existingContact = state.contactsList.find((contact: Contact) => contact.id === id);
      if (existingContact) {
        existingContact.name = userName;
        existingContact.lastname = userLastName;
        existingContact.age = userAge;
        existingContact.pager = userPager;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state) => {
      state.status = loading;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.status = succeeded;
      state.contactsList = state.contactsList.concat(action.payload);
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.status = failded;
      state.error = action.error.message;
    });
  },
});

export const { addContact, contactEdit } = contactsSlice.actions;

export default contactsSlice.reducer;
