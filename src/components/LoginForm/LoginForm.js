import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Container, Box, Input, Button, Text } from '@chakra-ui/react'

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container display='flex' flexWrap='wrap' width='300px' justifyContent='center' >
    <Text mt='20px' mb='10px' fontWeight='700'>Log in</Text>
    <Box onSubmit={handleSubmit} autoComplete="off" display='flex' alignItems='center' flexDirection='column' gap='20px' width='300px' mb='30px' padding='25px' bgColor='#BEE3F8' boxShadow='2xl' borderRadius='5px' fontWeight='700' margin='0px'>
      <label>
        Email
        <Input type="email" name="email" size='sm'/>
      </label>
      <label>
        Password
        <Input type="password" name="password" size='sm'/>
      </label>
      <Button colorScheme='blue' size='xs' width='80px' type="submit">Log In</Button>
      </Box>
      </Container>
  );
};