import { ContactItem } from "components/ContactItem/ContactItem";
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { Box } from '@chakra-ui/react'

export const ContactList = () => {
        const contacts = useSelector(getContacts);
        const filterContacts = useSelector(getFilter);
        const contactsList = contacts.filter(contact => contact.name.toLowerCase().includes(filterContacts.toLowerCase()));

    return (
        <Box bgColor='#BEE3F8' boxShadow='2xl' borderRadius='5px' width='300px'>
        {contactsList.map(({ id, name, number }) => {
                return (
            <ContactItem key={id} id={id} name={name} number={number} />
            )
            })}
                </Box>
    )
}

