import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button, Box } from '@chakra-ui/react'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box display='flex' justifyContent='flex-end' alignItems='center' padding='50px' gap='20px'>
      <p>Welcome, {user.name}@mail.com</p>
      <Button size='xs' colorScheme='whiteAlpha' type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Box>
  );
};