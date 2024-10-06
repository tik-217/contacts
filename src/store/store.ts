// redux
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// ducks
import contactsReducers, { contactsFetch } from "src/store/ducks/contacts";

export const store = configureStore({
  reducer: {
    contactsState: contactsReducers,
    [contactsFetch.reducerPath]: contactsFetch.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsFetch.middleware),
});

setupListeners(store.dispatch);
