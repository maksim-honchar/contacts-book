import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
});

export default contactsSlice.reducer;
