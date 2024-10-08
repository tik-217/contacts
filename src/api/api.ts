import { ContactDto } from "src/types/dto/ContactDto";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

// const axiosInstance = axios.create({
//   baseURL: "https://fs04.gcfiles.net/fileservice/file/download/a/177331/sc/",
//   timeout: 1000,
// });

// export async function fetchAllContacts() {
//   const allContacts = await axiosInstance
//     .get<ContactDto[], AxiosResponse>(
//       "/385/h/0afc05779dcbbebd7055a1d87b8c7c6b.json"
//     )
//     .then((data) => data);

//   return allContacts.data;
// }

// export async function fetchGroupContacts() {
//   const allContacts = await axiosInstance
//     .get<GroupContactsDto[], AxiosResponse>(
//       "0/h/f1e98b0d70d16a909818b03b72415733.json"
//     )
//     .then((data) => data);

//   return allContacts.data;
// }

class Api {
  axiosInstance: AxiosInstance;

  constructor() {
    const axiosInstance = axios.create({
      baseURL:
        "https://fs04.gcfiles.net/fileservice/file/download/a/177331/sc/",
      timeout: 1000,
    });

    this.axiosInstance = axiosInstance;
  }

  async fetchAllContacts() {
    const allContacts = await this.axiosInstance
      .get<ContactDto[], AxiosResponse>(
        "/385/h/0afc05779dcbbebd7055a1d87b8c7c6b.json"
      )
      .then((data) => data);

    return allContacts.data;
  }

  async fetchGroupContacts() {
    const allContacts = await this.axiosInstance
      .get<GroupContactsDto[], AxiosResponse>(
        "0/h/f1e98b0d70d16a909818b03b72415733.json"
      )
      .then((data) => data);

    return allContacts.data;
  }
}

export const api = new Api();
