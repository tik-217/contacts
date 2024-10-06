// react
import { memo, useRef } from "react";

// formik
import { Formik } from "formik";

// react-bootstrap
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

// types
import { ContactDto } from "src/types/dto/ContactDto";

// store
import { useAppDispatch } from "src/store/hooks";
import {
  setFoundContacts,
  useGetAllContactsQuery,
  useGetContactsOfGroupsQuery,
} from "src/store/ducks/contacts";

// utils
import { errorHandler } from "src/utils/errorHandler";

export interface FilterFormValues {
  name: string;
  groupId: string;
}

export const FilterForm = memo(() => {
  const formInitialValue = useRef({});

  const { data: contactsState, error: contactsStateError } =
    useGetAllContactsQuery();

  const { data: groupContactsList, error: groupContactsListError } =
    useGetContactsOfGroupsQuery();

  const dispatch = useAppDispatch();

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    if (!contactsState) return;
    if (!groupContactsList) return;

    let findContacts: ContactDto[] = contactsState;

    if (fv.name) {
      const fvName = fv.name.toLowerCase();
      findContacts = findContacts.filter(
        ({ name }) => name.toLowerCase().indexOf(fvName) > -1
      );
    }

    if (fv.groupId) {
      const groupContacts = groupContactsList.find(
        ({ id }) => id === fv.groupId
      );

      if (groupContacts) {
        findContacts = findContacts.filter(({ id }) =>
          groupContacts.contactIds.includes(id)
        );
      }
    }

    dispatch(setFoundContacts(findContacts));
  };

  errorHandler(contactsStateError);
  errorHandler(groupContactsListError);

  return (
    <Formik initialValues={formInitialValue.current} onSubmit={onSubmit}>
      {({ handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit} onChange={handleSubmit}>
          <Row xxl={4} className="g-4">
            <Col>
              <InputGroup className="mb-3">
                <Form.Control
                  id={"name"}
                  name={"name"}
                  onChange={handleChange}
                  placeholder="name"
                  aria-label="name"
                />
              </InputGroup>
            </Col>
            <Col>
              <Form.Select
                id={"groupId"}
                name={"groupId"}
                aria-label="Поиск по группе"
                onChange={handleChange}
              >
                <option>Open this select menu</option>
                {groupContactsList?.map((groupContacts) => (
                  <option value={groupContacts.id} key={groupContacts.id}>
                    {groupContacts.name}
                  </option>
                ))}
              </Form.Select>
            </Col>
            <Col>
              <Button variant={"primary"} type={"submit"}>
                Применить
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
});
