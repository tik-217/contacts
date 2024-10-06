// react
import { memo, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";

// react-bootstrap
import { Col, Row } from "react-bootstrap";

// types
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

// components
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { ContactCard } from "src/components/ContactCard";
import { Empty } from "src/components/Empty";

// store
import {
  useGetAllContactsQuery,
  useGetContactsOfGroupsQuery,
} from "src/store/ducks/contacts";

// utils
import { errorHandler } from "src/utils/errorHandler";

export const GroupPage = memo(() => {
  const { groupId } = useParams<{ groupId: string }>();

  const [similarContacts, setSimilarContacts] = useState<ContactDto[]>([]);
  const [groupContacts, setGroupContacts] = useState<GroupContactsDto>();

  const {
    data: contactsState,
    error: contactsStateError,
    isLoading: contactsIsLoading,
  } = useGetAllContactsQuery();

  const { data: groupContactsState, error: groupContactsError } =
    useGetContactsOfGroupsQuery();

  useLayoutEffect(() => {
    if (!groupContactsState) return;

    const findGroup = groupContactsState.find(({ id }) => id === groupId);
    setGroupContacts(findGroup);

    function getSimilarContacts() {
      if (findGroup && contactsState) {
        return contactsState.filter(({ id }) =>
          findGroup.contactIds.includes(id)
        );
      }
      return [];
    }

    setSimilarContacts(() => getSimilarContacts());
    // eslint-disable-next-line
  }, [groupId, contactsIsLoading]);

  errorHandler(contactsStateError);
  errorHandler(groupContactsError);

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
              {similarContacts.map((contact) => (
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
