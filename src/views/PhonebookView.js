import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../components/Container';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import { phonebookOperations, phonebookSelectors } from '../redux/phonebook';


export default function PhonebookView() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(phonebookSelectors.getLoading);

  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch])

  return (
    <Container>
      <h1 className="Title">Phonebook</h1>
      <ContactForm />
      <h2 className="Title">Contacts</h2>
      <Filter />
      {isLoadingContacts && <h1>Loading...</h1>}
        <ContactList />
    </Container>
  )
};