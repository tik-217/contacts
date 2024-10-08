// react
import { useEffect } from "react";

// react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// react-bootstrap
import { ThemeProvider } from "react-bootstrap";

// mobx
import { autorun, runInAction } from "mobx";
import { observer } from "mobx-react-lite";

// pages
import {
  ContactListPage,
  GroupPage,
  ContactPage,
  FavoritListPage,
  GroupListPage,
} from "src/pages";

// components
import { Layout } from "src/components/Layout";

// store
import { contactsStore } from "src/store/contactsStore";

// styles
import "./MainApp.scss";

export const MainApp = observer(() => {
  useEffect(() => {
    contactsStore.getContacts();
    contactsStore.getGroupContacts();
  }, []);

  autorun(() => {
    if (!contactsStore.contacts.length) return;

    runInAction(() => {
      contactsStore.setFoundContacts(contactsStore.contacts);

      contactsStore.setFavoriteContacts([
        contactsStore.contacts[0].id,
        contactsStore.contacts[1].id,
        contactsStore.contacts[2].id,
        contactsStore.contacts[3].id,
      ]);
    });
  });

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ContactListPage />} />
            <Route path="contact">
              <Route index element={<ContactListPage />} />
              <Route path=":contactId" element={<ContactPage />} />
            </Route>
            <Route path="groups">
              <Route index element={<GroupListPage />} />
              <Route path=":groupId" element={<GroupPage />} />
            </Route>
            <Route path="favorit" element={<FavoritListPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
});
