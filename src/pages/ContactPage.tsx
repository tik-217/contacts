// react
import { FC, useEffect, useState } from "react";

// react-router-dom
import { useParams } from "react-router-dom";

// react-bootstrap
import { Col, Row } from "react-bootstrap";

// components
import { ContactCard } from "src/components/ContactCard";
import { Empty } from "src/components/Empty";

// types
import { ContactDto } from "src/types/dto/ContactDto";

// mobx
import { observer } from "mobx-react-lite";

// store
import { contactsStore } from "src/store/contactsStore";

export const ContactPage: FC = observer(() => {
  const { contactId } = useParams<{ contactId: string }>();

  const [contact, setContact] = useState<ContactDto>();
  const contactsState = contactsStore.contacts;

  useEffect(() => {
    const findContact = contactsState.find(({ id }) => id === contactId);

    setContact(() => findContact);
    // eslint-disable-next-line
  }, [contactId]);

  return (
    <Row xxl={3}>
      <Col className={"mx-auto"}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  );
});
