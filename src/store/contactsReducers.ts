import {
  IActionsTypes,
  SET_CONTACTS,
  SET_FOUND_CONTACTS,
  SET_GROUP_CONTACTS,
  SET_FAVORIT_CONTACTS,
} from "src/store/actions";
import { initialState } from "src/store/initialState";

export function contactsReducers(state = initialState, action: IActionsTypes) {
  switch (action.type) {
    case SET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };
    case SET_FOUND_CONTACTS:
      return {
        ...state,
        foundContacts: action.payload,
      };
    case SET_GROUP_CONTACTS:
      return {
        ...state,
        groupContacts: action.payload,
      };
    case SET_FAVORIT_CONTACTS:
      return {
        ...state,
        favouritContacts: action.payload,
      };
    default:
      return state;
  }
}
