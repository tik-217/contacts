import { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { FilterForm } from "src/components/FilterForm";
import { useAppSelector } from "src/store/hooks";

export const ContactListPage = memo(() => {
  const foundContactsState = useAppSelector(
    ({ contactsState }) => contactsState.foundContacts
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
