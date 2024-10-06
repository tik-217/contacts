// react
import { memo, useEffect, useState } from "react";

// react-bootstrap
import { Col, Row } from "react-bootstrap";

// components
import { ContactCard } from "src/components/ContactCard";

// types
import { ContactDto } from "src/types/dto/ContactDto";

// utils
import { errorHandler } from "src/utils/errorHandler";

// store
import { useGetAllContactsQuery } from "src/store/ducks/contacts";
import { useAppSelector } from "src/store/hooks";

export const FavoritListPage = memo(() => {
  const [favoriteContacts, setFavoriteContacts] = useState<ContactDto[]>([]);

  const { data: contactsState, error: contactsStateError } =
    useGetAllContactsQuery();

  const favoriteContactsState = useAppSelector(
    (state) => state.contactsState.favoriteContacts
  );

  useEffect(() => {
    if (!contactsState) return;
    if (!favoriteContactsState) return;

    const favoriteContacts = contactsState.filter(({ id }) =>
      favoriteContactsState.includes(id)
    );

    setFavoriteContacts(favoriteContacts);
  }, [contactsState, favoriteContactsState]);

  errorHandler(contactsStateError);

  return (
    <Row xxl={4} className="g-4">
      {favoriteContacts.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
});
