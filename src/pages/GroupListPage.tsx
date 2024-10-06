// react
import { memo } from "react";

// react-bootstrap
import { Col, Row } from "react-bootstrap";

// components
import { GroupContactsCard } from "src/components/GroupContactsCard";

// store
import { useGetContactsOfGroupsQuery } from "src/store/ducks/contacts";

// utils
import { errorHandler } from "src/utils/errorHandler";

export const GroupListPage = memo(() => {
  const { data: groupContactsState, error: groupContactsError } =
    useGetContactsOfGroupsQuery();

  errorHandler(groupContactsError);

  return (
    <Row xxl={4}>
      {groupContactsState?.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  );
});
