import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Button, Text } from '@chakra-ui/react'

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
    return (
        <Text fontSize='md' padding='10px' display='flex' alignItems='center' marginBottom='10px' key={id}>{name}: {number} <Button type="button" size='xs' colorScheme='blue' marginLeft='10px' onClick={() => dispatch(deleteContact(id))}>Delete</Button></Text>
    )
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}
