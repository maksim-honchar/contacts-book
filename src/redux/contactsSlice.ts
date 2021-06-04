import { createSlice } from '@reduxjs/toolkit';
import contactsData from '../utils/data.json';

const initialState = contactsData;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    contactEdit(state, action) {
      const {
        id, userName, userLastName, userAge, userPager,
      } = action.payload;
      const existingContact = state.find((contact) => contact.id === id);
      if (existingContact) {
        existingContact.name = userName;
        existingContact.lastname = userLastName;
        existingContact.age = userAge;
        existingContact.pager = userPager;
      }
    },
  },
});

export const { contactEdit } = contactsSlice.actions;

export default contactsSlice.reducer;
