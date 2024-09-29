import { memo, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { ContactDto } from "src/types/dto/ContactDto";
import { useAppSelector } from "src/store/hooks";

export const FavoritListPage = memo(() => {
  const [favoriteContacts, setFavoriteContacts] = useState<ContactDto[]>([]);

  const contactsState = useAppSelector(
    ({ contactsState }) => contactsState.contacts
  );
  const favoriteContactsState = useAppSelector(
    ({ contactsState }) => contactsState.favoriteContacts
  );

  useEffect(() => {
    const favoriteContacts = contactsState.filter(({ id }) =>
      favoriteContactsState.includes(id)
    );
    setFavoriteContacts(favoriteContacts);
  }, [contactsState, favoriteContactsState]);

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
