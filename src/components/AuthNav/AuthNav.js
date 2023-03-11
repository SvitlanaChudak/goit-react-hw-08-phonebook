import { NavLink } from 'react-router-dom';
import { Box } from '@chakra-ui/react'

export const AuthNav = () => {
  return (
    <Box display='flex' justifyContent='flex-end' alignItems='center' padding='50px' gap='20px' fontWeight='700'>
      <NavLink to="/register">
        Register
      </NavLink>
      <NavLink to="/login">
        Log In
      </NavLink>
    </Box>
  );
};

