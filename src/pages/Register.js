import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Text, Container } from '@chakra-ui/react'

export default function Register() {
  return (
    <Container display='flex' justifyContent='center' flexWrap='wrap'>
        <Text paddingRight='150px' mt='20px' mb='10px' fontWeight='700'>Registration form</Text>
      <RegisterForm />
    </Container>
  );
}