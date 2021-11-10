import NextLink from 'next/link'
import { Container, Box, Button, Heading, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import testImg from '/public/images/profile.png'

const Home = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
        maxW="90vw"
        h="60vh"
        p={3}
        mb={6}
        align="center"
      >
        Hello World.
      </Box>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Works
        </Heading>
        <Box align="center" my={4}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem href="/works" title="WorkA" thumbnail={testImg}></GridItem>
            <GridItem href="/works" title="WorkB" thumbnail={testImg}></GridItem>
          </SimpleGrid>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme={useColorModeValue('purple', 'orange')}>
              More..
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Posts
        </Heading>
        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme={useColorModeValue('purple', 'orange')}>
              More..
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  )
}

export default Home
