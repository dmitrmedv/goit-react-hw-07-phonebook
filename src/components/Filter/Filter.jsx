import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { nanoid } from 'nanoid';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const findContact = event => dispatch(setFilter(event.target.value));
  const idFilter = nanoid();

  return (
    <div className={css.filterForm}>
      <label htmlFor={idFilter}>Find contacts by name</label>
      <input type="text" onChange={findContact} id={idFilter} />
    </div>
  );
};

export default Filter;
