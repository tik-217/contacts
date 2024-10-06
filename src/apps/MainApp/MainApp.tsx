// react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// react-bootstrap
import { ThemeProvider } from "react-bootstrap";

// components
import { Layout } from "src/components/Layout";

// pages
import {
  ContactListPage,
  GroupPage,
  ContactPage,
  FavoritListPage,
  GroupListPage,
} from "src/pages";

// styles
import "./MainApp.scss";

export const MainApp = () => {
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
};
