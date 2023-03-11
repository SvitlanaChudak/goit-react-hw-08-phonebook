import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Toaster, toast } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { Box, Input, Button } from '@chakra-ui/react'

const initialValues = {
        name: '',
        number: '',
}
    
const FormSchema = yup.object().shape({
  name: yup.string().min(2).required(),
  number: yup.string().min(7).max(14).required(),
});

  
export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const isExist = contacts.map(contact => contact.name);
    
      if (isExist.includes(values.name)) {
        alert(`${values.name} is already in contacts`)
        return
      }
    dispatch(addContact(values));
    toast.success('New contact successfully added');
    resetForm();
  }
    
    return (
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FormSchema}>
            <Box display='flex' flexDirection='column' gap='20px' width='300px' mb='30px' padding='25px' bgColor='#BEE3F8' boxShadow='2xl' borderRadius='5px' fontWeight='700'>
                <label htmlFor='name'>Name</label>
                <ErrorMessage name="name" />
                    <Input 
                    placeholder='enter name' bgColor='white'
                     type="text"
                     name="name"
                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                     required
                        />
                    
                <label htmlFor='number'>Number</label>
                <ErrorMessage name="number" />
                    <Input placeholder='enter number' bgColor='white'
                     type="tel"
                     name="number"
                     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                     required
                        />
                      <div> 
                <Button colorScheme='blue' size='sm' ml='75px' type="submit" >Add contact</Button>
                    <Toaster />
                    </div> 
                </Box>
                </Formik>
    )
    
    }

