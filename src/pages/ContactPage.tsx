// react
import { useEffect, useState } from "react";

// react-bootstrap
import { Col, Row } from "react-bootstrap";

// react-router-dom
import { useParams } from "react-router-dom";

// components
import { ContactCard } from "src/components/ContactCard";
import { Empty } from "src/components/Empty";

// types
import { ContactDto } from "src/types/dto/ContactDto";

// store
import { useGetAllContactsQuery } from "src/store/ducks/contacts";

// utils
import { errorHandler } from "src/utils/errorHandler";

export const ContactPage = () => {
  const { contactId } = useParams<{ contactId: string }>();

  const [foundContact, setFoundContact] = useState<ContactDto>();

  const { data: contactsState, error: contactsStateError } =
    useGetAllContactsQuery();

  useEffect(() => {
    const findContact = contactsState?.find(({ id }) => id === contactId);

    setFoundContact(findContact);
    // eslint-disable-next-line
  }, [contactId]);

  errorHandler(contactsStateError);

  return (
    <Row xxl={3}>
      <Col className={"mx-auto"}>
        {foundContact ? <ContactCard contact={foundContact} /> : <Empty />}
      </Col>
    </Row>
  );
};
