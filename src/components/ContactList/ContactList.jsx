import { getContacts, getFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizeFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  const dispatch = useDispatch();

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(({ id, name, number }) => {
        const handleDelete = () => dispatch(deleteContact(id));
        return (
          <li key={id} className={css.contactItem}>
            {name}: {number}
            <button type="button" className={css.btn} onClick={handleDelete}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
