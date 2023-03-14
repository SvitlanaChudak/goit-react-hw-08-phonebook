import { Container, Image, Box, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box w='100%'
  h='100vh'
  bgGradient={[
    'linear(to-tr, teal.300, yellow.400)',
    'linear(to-t, blue.200, teal.500)',
    'linear(to-b, orange.100, purple.300)',
  ]}>
    <Container display='flex' justifyContent='center' flexWrap='wrap' >
      <Text fontSize='2xl' fontWeight='700' textAlign='center' pt='20px' color='#1A365D'>Welcome! Please, Sign up or Log in to have access to the Phonebook.</Text>
      <Box >
         <Image src='https://i.ibb.co/Kbg7wF7/internet-library-online-education-concept.jpg' alt='phonebook picture' borderRadius='50px' objectFit='cover' boxSize='320px' pt='20px'  />
      </Box>
      </Container>
      </Box>
  );
}
