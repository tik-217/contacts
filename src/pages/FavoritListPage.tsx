// react-bootstrap
import { Col, Row } from "react-bootstrap";

// mobx-react-lite
import { observer } from "mobx-react-lite";

// store
import { contactsStore } from "src/store/contactsStore";

// components
import { ContactCard } from "src/components/ContactCard";

export const FavoritListPage = observer(() => {
  const favoriteContactsState = contactsStore.favoriteContacts;

  return (
    <Row xxl={4} className="g-4">
      {favoriteContactsState.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
});
