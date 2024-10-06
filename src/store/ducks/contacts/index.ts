import { contactsSlice } from "./reducers";
import { contactsFetch } from "./api";

export const { useGetAllContactsQuery, useGetContactsOfGroupsQuery } =
  contactsFetch;

export { contactsFetch };

export const { setFoundContacts, setFavouriteContacts } = contactsSlice.actions;

export default contactsSlice.reducer;
