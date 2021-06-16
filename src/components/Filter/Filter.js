import { useSelector, useDispatch } from 'react-redux';
import { phonebookSelectors, changeFilter } from '../../redux/phonebook';
import styles from './Filter.module.scss';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(phonebookSelectors.getFilter);

  const onChange = e => dispatch(changeFilter(e.target.value));

  return (
    <label className={styles.filterLabel}>
      Find contacts by name
      <input className={styles.input}
        type='text'
        name='filter'
        value={value}
        onChange={onChange}
        placeholder='Enter name for Search'
      />
    </label>
  )
};