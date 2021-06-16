import { useSelector } from 'react-redux';
import { phonebookSelectors } from '../../redux/phonebook';
import ContactListItem from '../ContactListItem';
import styles from './ContactList.module.scss';


export default function ContactList() {
  const list = useSelector(phonebookSelectors.getVisibleContacts);

  return (
    list.length > 0 &&
    (<ul className={styles.list}>
      {list.map((item) => (
        <ContactListItem key={item.id} id={item.id} name={item.name} number={item.number} />
      ))}
    </ul>)
  );
};