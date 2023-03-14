import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Container, Box, Input, Button, Text } from '@chakra-ui/react'

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (

    <Container display='flex' flexWrap='wrap' width='300px' justifyContent='center' >
      <Text mt='20px' mb='10px' fontWeight='700'>Registration form</Text>
        <form onSubmit={handleSubmit} autoComplete="off">
    <Box display='flex' flexDirection='column' gap='20px' width='300px' mb='30px' padding='25px' bgColor='#BEE3F8' boxShadow='2xl' borderRadius='5px' fontWeight='700' margin='0px'>
      <label>
        Username
        <Input type="name" name="name" size='sm' bgColor='white' placeholder='enter name'/>
      </label>
      <label>
        Email
        <Input type="email" name="email" size='sm' bgColor='white' placeholder='enter email'/>
      </label>
      <label>
        Password
        <Input type="password" name="password" size='sm' bgColor='white' placeholder='enter password'/>
      </label>
          <Button colorScheme='blue' size='xs' width='80px' type="submit" ml='auto' mr='auto'>Register</Button>
        </Box>
        </form>
      </Container>

  );
};