import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox>
      <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder="blur" loading="lazy" />
      <NextLink href={href} passHref>
        <LinkOverlay>
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
      </NextLink>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)
