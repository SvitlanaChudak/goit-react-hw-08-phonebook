import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Box } from '@chakra-ui/react'

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box fontWeight='700' fontSize='xl' display='flex' gap='20px' ml='50px' >
      <NavLink to="/" >Home</NavLink>
      {isLoggedIn && (<NavLink to="/contacts">Contacts</NavLink>)}
    </Box>
  );
};
