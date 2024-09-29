// redux
import { combineReducers, createStore } from "redux";

// reducers
import { contactsReducers } from "src/store/contactsReducers";

const rootReducers = combineReducers({
  contactsState: contactsReducers,
});

export const store = createStore(rootReducers);
