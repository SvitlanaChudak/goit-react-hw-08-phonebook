import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = event => {
    dispatch(setFilter(event.target.value))
  }
    return (
        <label>Find contacts by name
        <input type="text" name="filter" value={filter} onChange={onChange}/>
    </label>
    )
}

