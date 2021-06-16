import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { phonebookOperations } from '../../redux/phonebook';
import styles from './ContactListItem.module.scss';
import { Button } from '@material-ui/core';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onClick = () => dispatch(phonebookOperations.removeContact(id))

  return (
    <li className={styles.item}>{name}: {number}
      <Button className={styles.button} type='button' variant="contained" color="primary" onClick={onClick} >Delete</Button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;