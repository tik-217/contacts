import { Formik } from "formik";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { contactsStore } from "src/store/contactsStore";
import { ContactDto } from "src/types/dto/ContactDto";
import { observer } from "mobx-react-lite";

export interface FilterFormValues {
  name: string;
  groupId: string;
}

export const FilterForm = observer(() => {
  const contactsState = contactsStore.contacts;
  const groupContactsState = contactsStore.groupContacts;

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let findContacts: ContactDto[] = contactsState;

    if (fv.name) {
      const fvName = fv.name.toLowerCase();
      findContacts = findContacts.filter(
        ({ name }) => name.toLowerCase().indexOf(fvName) > -1
      );
    }

    if (fv.groupId) {
      const groupContacts = groupContactsState.find(
        ({ id }) => id === fv.groupId
      );

      if (groupContacts) {
        findContacts = findContacts.filter(({ id }) =>
          groupContacts.contactIds.includes(id)
        );
      }
    }

    contactsStore.setFoundContacts(findContacts);
  };

  return (
    <Formik initialValues={{}} onSubmit={onSubmit}>
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
                {groupContactsState.map((groupContacts) => (
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
