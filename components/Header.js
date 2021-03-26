import { Box, Center, Flex, Heading, Spacer } from '@chakra-ui/react'
import Image from 'next/image'

import TabLinks from './TabLinks'

function Header() {
  return (
    <header>
      <Center h="96px">
        <Flex marginX={['0px', '40px', '40px', '120px']} w={['80%', '80%', '100%']}>
          <Flex w={['100%', '100%', 'auto']} justifyContent="center">
            <Image
              src="/images/murmurations-logo.png"
              alt="Murmurations logo"
              width={'100%'}
              height={'70%'}
            />
            <Box paddingTop="2">
              <Heading as="h1" fontSize="xl" color="text">
                Murmurations
              </Heading>
              <Heading as="h2" fontSize={['sm', 'sm', 'md']} color="secondaryText">
                Making Movements Visible
              </Heading>
            </Box>
          </Flex>

          <Spacer />
          <Box display={['none', 'none', 'block']} w="550px">
            <TabLinks />
          </Box>
        </Flex>
      </Center>
    </header>
  )
}

export default Header
