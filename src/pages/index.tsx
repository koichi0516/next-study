import { Container, Box, useColorModeValue } from '@chakra-ui/react'

export default function Home() {
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')} p={3} m={6} align="center">
        Hello World.
      </Box>
    </Container>
  )
}
