import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Container, Box, Input, Button } from '@chakra-ui/react'

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
    <Container>
    <Box onSubmit={handleSubmit} autoComplete="off" display='flex' flexDirection='column' gap='20px' width='300px' mb='30px' padding='25px' bgColor='#BEE3F8' boxShadow='2xl' borderRadius='5px' fontWeight='700' margin='0px'>
      <label>
        Username
        <Input bgColor='white' type="text" name="name" size='sm'/>
      </label>
      <label>
        Email
        <Input bgColor='white' type="email" name="email" size='sm'/>
      </label>
      <label>
        Password
        <Input bgColor='white' type="password" name="password" size='sm'/>
      </label>
      <Button colorScheme='blue' size='xs' ml='75px' width='80px' type="submit">Register</Button>
      </Box>
      </Container>
  );
};