import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Box } from '@chakra-ui/react'

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box bgColor='#2B6CB0' boxShadow='md' color='white' display='flex' justifyContent='space-between' alignItems='center' gap='20px' height='70px'>
      <Navigation />
      {isLoggedIn ?
        <UserMenu /> :
        <AuthNav />}
    </Box>
  );
};

