import { createSlice } from '@reduxjs/toolkit';
import contactsData from '../utils/data.json';

const initialState = contactsData;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
});

export default contactsSlice.reducer;
