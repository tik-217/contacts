import { ContactDto } from "src/types/dto/ContactDto";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export const SET_CONTACTS = "contacts/setContacts";
export const SET_FOUND_CONTACTS = "contacts/setFoundContacts";
export const SET_GROUP_CONTACTS = "contacts/setGroupContacts";
export const SET_FAVORIT_CONTACTS = "contacts/setFavoritContacts";

interface IActionSetContacts {
  type: typeof SET_CONTACTS;
  payload: ContactDto[];
}

interface IActionSetFoundContacts {
  type: typeof SET_FOUND_CONTACTS;
  payload: ContactDto[];
}

interface IActionSetGroupContacts {
  type: typeof SET_GROUP_CONTACTS;
  payload: GroupContactsDto[];
}

interface IActionSetFavoritContacts {
  type: typeof SET_FAVORIT_CONTACTS;
  payload: FavoriteContactsDto;
}

export function actionSetContacts(payload: ContactDto[]): IActionSetContacts {
  return {
    type: SET_CONTACTS,
    payload,
  };
}

export function actionSetFoundContacts(
  payload: ContactDto[]
): IActionSetFoundContacts {
  return {
    type: SET_FOUND_CONTACTS,
    payload,
  };
}

export function actionSetGroupContacts(
  payload: GroupContactsDto[]
): IActionSetGroupContacts {
  return {
    type: SET_GROUP_CONTACTS,
    payload,
  };
}

export function actionSetFavoritContacts(
  payload: FavoriteContactsDto
): IActionSetFavoritContacts {
  return {
    type: SET_FAVORIT_CONTACTS,
    payload,
  };
}

export type IActionsTypes =
  | IActionSetContacts
  | IActionSetFoundContacts
  | IActionSetGroupContacts
  | IActionSetFavoritContacts;
