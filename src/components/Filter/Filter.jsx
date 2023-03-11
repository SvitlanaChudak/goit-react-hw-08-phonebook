import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';
import { Text, Input } from '@chakra-ui/react'

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = event => {
    dispatch(setFilter(event.target.value))
  }
    return (
        <Text fontSize='lg' fontWeight='700'>Find contacts by name
        <Input size='md' mt='10px' mb='10px' width='300px' type="text" name="filter" value={filter} onChange={onChange}/>
    </Text>
    )
}

