// react
import { useLayoutEffect, useState } from "react";

// react-router-dom
import { useParams } from "react-router-dom";

// react-bootstrap
import { Col, Row } from "react-bootstrap";

// mobx-react-lite
import { observer } from "mobx-react-lite";

// store
import { contactsStore } from "src/store/contactsStore";

// types
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

// components
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { ContactCard } from "src/components/ContactCard";
import { Empty } from "src/components/Empty";

export const GroupPage = observer(() => {
  const { groupId } = useParams<{ groupId: string }>();

  const contactsState = contactsStore.contacts;
  const groupContactsState = contactsStore.groupContacts;

  const [contacts, setContacts] = useState<ContactDto[]>([]);
  const [groupContacts, setGroupContacts] = useState<GroupContactsDto>();

  useLayoutEffect(() => {
    const findGroup = groupContactsState.find(({ id }) => id === groupId);
    setGroupContacts(findGroup);

    setContacts(() => {
      if (findGroup) {
        return contactsState.filter(({ id }) =>
          findGroup.contactIds.includes(id)
        );
      }
      return [];
    });
    // eslint-disable-next-line
  }, [groupId]);

  return (
    <Row className="g-4">
      {groupContacts ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                <GroupContactsCard groupContacts={groupContacts} />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xxl={4} className="g-4">
              {contacts.map((contact) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              ))}
            </Row>
          </Col>
        </>
      ) : (
        <Empty />
      )}
    </Row>
  );
});
