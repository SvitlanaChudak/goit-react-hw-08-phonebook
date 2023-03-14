import { LoginForm } from 'components/LoginForm/LoginForm';
import { Box } from '@chakra-ui/react'

export default function Login() {
  return (
            <Box w='100%'
      h='100vh'

  bgGradient={[
    'linear(to-tr, teal.300, yellow.400)',
    'linear(to-t, blue.200, teal.500)',
    'linear(to-b, orange.100, purple.300)',
  ]}>
      <LoginForm />
    </Box>
  );
}