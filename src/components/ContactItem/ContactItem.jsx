import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Button, Text } from '@chakra-ui/react'

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
    return (
      <Text bgColor='#EBF8FF' boxShadow='2xl' borderRadius='5px' width='300px' padding='10px' mb='10px' fontSize='sm' display='flex' alignItems='center' key={id}>{name}: {number}
        <Button type="button" size='xs' colorScheme='blue' marginLeft='auto' onClick={() => dispatch(deleteContact(id))}>Delete</Button></Text>
    )
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}
