import { Container, Image, Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box bgColor='#BEE3F8' width='100%' height='650px'>
    <Container>
      <Box fontSize='2xl' fontWeight='700' textAlign='center' pt='20px' color='#1A365D' >
        Welcome! Please, Sign up or Log in to have access to the Phonebook.
         <Image src='https://i.ibb.co/Kbg7wF7/internet-library-online-education-concept.jpg' alt='phonebook picture' borderRadius='50px' objectFit='cover' boxSize='500px' pt='20px' />
      </Box>
      </Container>
      </Box>
  );
}
