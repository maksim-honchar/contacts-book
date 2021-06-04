import { configureStore } from '@reduxjs/toolkit';
import throttle from 'lodash.throttle';
import contactsReducer from './contactsSlice';
import { saveState } from '../utils/localStorage';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

store.subscribe(
  throttle(() => {
    saveState({
      contacts: store.getState().contacts,
    });
  }, 1000),
);

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;
