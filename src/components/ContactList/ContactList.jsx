import { ContactItem } from "components/ContactItem/ContactItem";
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';

export const ContactList = () => {
        const contacts = useSelector(getContacts);
        const filterContacts = useSelector(getFilter);
        const contactsList = contacts.filter(contact => contact.name.toLowerCase().includes(filterContacts.toLowerCase()));

    return (
        <div>
        {contactsList.map(({ id, name, number }) => {
                return (
            <ContactItem key={id} id={id} name={name} number={number} />
            )
            })}
                </div>
    )
}

