// react
import { useEffect } from "react";

// react-bootstrap
import { Col, Row } from "react-bootstrap";

// mobx-react-lite
import { observer } from "mobx-react-lite";

// components
import { ContactCard } from "src/components/ContactCard";
import { FilterForm } from "src/components/FilterForm";

// store
import { contactsStore } from "src/store/contactsStore";

export const ContactListPage = observer(() => {
  const foundContacts = contactsStore.foundContacts;

  useEffect(() => {
    contactsStore.setFoundContacts(contactsStore.contacts);
  }, []);

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {foundContacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
});
