// react
import { memo } from "react";

// react-bootstrap
import { Col, Row } from "react-bootstrap";

// components
import { ContactCard } from "src/components/ContactCard";
import { FilterForm } from "src/components/FilterForm";

// store
import { useAppSelector } from "src/store/hooks";

export const ContactListPage = memo(() => {
  const foundContactsState = useAppSelector(
    (state) => state.contactsState.foundContacts
  );

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {foundContactsState.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
});
