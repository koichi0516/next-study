import { Box, Container } from '@chakra-ui/layout'
import { AppProps } from 'next/dist/shared/lib/router/router'
import Head from 'next/head'
import Navbar from 'src/components/navbar'

const Main = ({ children, router }: AppProps) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Home</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
