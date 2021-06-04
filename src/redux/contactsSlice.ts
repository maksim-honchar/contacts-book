import { createSlice } from '@reduxjs/toolkit';
import { ContactProps } from '../types';
import contactsData from '../utils/data.json';
import { loadState } from '../utils/localStorage';

const persistedState = loadState();

const initialState = persistedState?.contacts || contactsData;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    contactEdit(state, action) {
      const {
        id, userName, userLastName, userAge, userPager,
      } = action.payload;
      const existingContact = state.find((contact: ContactProps) => contact.id === id);
      if (existingContact) {
        existingContact.name = userName;
        existingContact.lastname = userLastName;
        existingContact.age = userAge;
        existingContact.pager = userPager;
      }
    },
  },
});

export const { addContact, contactEdit } = contactsSlice.actions;

export default contactsSlice.reducer;
