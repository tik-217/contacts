import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "src/store/initialState";
import { ContactDto } from "src/types/dto/ContactDto";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setFoundContacts(state, action: PayloadAction<ContactDto[]>) {
      state.foundContacts = action.payload;
    },
    setFavouriteContacts(state, action: PayloadAction<FavoriteContactsDto>) {
      state.favoriteContacts = action.payload;
    },
  },
});
