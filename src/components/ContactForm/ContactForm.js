import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { phonebookOperations, phonebookSelectors } from '../../redux/phonebook';
import styles from './ContactForm.module.scss';
import { Button } from '@material-ui/core';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(phonebookSelectors.getAllContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const handleNameChange = e => {
    setName(e.currentTarget.value);
  };

  const handleNumberChange = e => {
    setNumber(e.currentTarget.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    if (contacts.find((el) => el.name === name)) {
      alert('Contact is already in contacts.');
      resetForm();
      return;
    }
    
    dispatch(phonebookOperations.addContact({ name, number }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <label className={styles.label}>Name
        <input
          className={styles.input}
          type='text'
          name='name'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          placeholder='Enter name'
          required
          value={name}
          onChange={handleNameChange}
        />
      </label>
     <label className={styles.label}>Number
        <input            
          className={styles.input}
          type='tel'
          name='number'
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          placeholder='Enter phone number'
          required
          value={number}
          onChange={handleNumberChange} />
      </label>
      <Button type='submit' variant="contained" color="primary">Add contact</Button>
    </form>
  )
};