// reduxjs
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// types
import { ContactDto } from "src/types/dto/ContactDto";

// types
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

// actions
import { setFavouriteContacts, setFoundContacts } from ".";

export const contactsFetch = createApi({
  reducerPath: "contactsFetch",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fs04.gcfiles.net/fileservice/file/download/a/177331/sc/",
  }),
  endpoints: (builder) => ({
    getAllContacts: builder.query<ContactDto[], void>({
      query: () => "385/h/0afc05779dcbbebd7055a1d87b8c7c6b.json",
      async onCacheEntryAdded(_, { dispatch, cacheDataLoaded }) {
        const response = await cacheDataLoaded;

        dispatch(
          setFavouriteContacts([
            response.data[0].id,
            response.data[1].id,
            response.data[2].id,
            response.data[3].id,
          ])
        );

        dispatch(setFoundContacts(response.data));
      },
    }),
    getContactsOfGroups: builder.query<GroupContactsDto[], void>({
      query: () => "0/h/f1e98b0d70d16a909818b03b72415733.json",
    }),
  }),
});
