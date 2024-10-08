// mobx
import { makeAutoObservable, runInAction } from "mobx";

// api
import { api } from "src/api";

// types
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { ContactDto } from "src/types/dto/ContactDto";

export const contactsStore = makeAutoObservable({
  groupContacts: [] as GroupContactsDto[],
  favoriteContacts: [] as ContactDto[],
  foundContacts: [] as ContactDto[],
  contacts: [] as ContactDto[],

  setFavoriteContacts(newFavoriteContactsIds: FavoriteContactsDto) {
    const favoriteContacts = this.contacts.filter(({ id }) =>
      newFavoriteContactsIds.includes(id)
    );

    this.favoriteContacts = favoriteContacts;
  },

  setFoundContacts(filtredContacts: ContactDto[]) {
    runInAction(() => {
      this.foundContacts = filtredContacts;
    });
  },

  *getContacts() {
    const allContacts: ContactDto[] = yield api.fetchAllContacts();

    this.contacts = allContacts;
  },

  *getGroupContacts() {
    const groupContacts: GroupContactsDto[] = yield api.fetchGroupContacts();

    this.groupContacts = groupContacts;
  },
});
