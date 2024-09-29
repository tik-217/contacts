import { DATA_CONTACT, DATA_GROUP_CONTACT } from "src/__data__";

export const initialState = {
  contacts: DATA_CONTACT,
  foundContacts: DATA_CONTACT,
  groupContacts: DATA_GROUP_CONTACT,
  favoriteContacts: [
    DATA_CONTACT[0].id,
    DATA_CONTACT[1].id,
    DATA_CONTACT[2].id,
    DATA_CONTACT[3].id,
  ],
};
