import { LoginForm } from 'components/LoginForm/LoginForm';
import { Text, Container } from '@chakra-ui/react';

export default function Login() {
  return (
    <Container display='flex' justifyContent='center' flexWrap='wrap'>
        <Text paddingRight='155px' mt='20px' mb='10px' fontWeight='700'>Log in</Text>
      <LoginForm />
    </Container>
  );
}