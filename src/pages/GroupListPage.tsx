// react-bootstrap
import { Col, Row } from "react-bootstrap";

// mobx-react-lite
import { observer } from "mobx-react-lite";

// components
import { GroupContactsCard } from "src/components/GroupContactsCard";

// store
import { contactsStore } from "src/store/contactsStore";

export const GroupListPage = observer(() => {
  const groupContactsState = contactsStore.groupContacts;

  return (
    <Row xxl={4}>
      {groupContactsState.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  );
});
