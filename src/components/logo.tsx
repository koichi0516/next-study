import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 10px;
  padding: 10px;
`

const Logo = () => {
  const logoImg = `/images/profile.jpg`
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={logoImg} width={20} height={20} alt="logo"></Image>
          <Text
            color={useColorModeValue('gray.800', 'gray.100')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            Koichiro
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
