import { toast, Toaster } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { Box, Input, Button } from '@chakra-ui/react'


export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = (e, name) => {
    e.preventDefault()
    const isExist = contacts.map(contact => contact.name);
    const form = e.currentTarget;
    
      if (isExist.includes(name)) {
        alert(`${name} is already in contacts`)
        return
      }
    dispatch(addContact({
        name: form.elements.name.value,
        number: form.elements.number.value,
      }));
    toast.success('New contact successfully added');
    form.reset();
  }
    
  return (
                <form onSubmit={handleSubmit}>
            <Box width='300px' mb='20px' mt='10px' padding='25px' bgColor='#BEE3F8' boxShadow='2xl' borderRadius='5px' fontWeight='700'>
          <label>Name
                    <Input 
                    placeholder='enter name' bgColor='white' size='sm' mb='20px'
                     type="text"
                     name="name"
                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                     required
                        /></label>
                <label>Number
                    <Input placeholder='enter number' bgColor='white' size='sm' mb='20px'
                     type="tel"
                     name="number"
                     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                     required
                        /></label>
  <Button colorScheme='blue' size='sm' type="submit" ml='75px'>Add contact</Button>
      </Box>
      <Toaster/>
                </form>
    )
    }


