import { Box, Flex, Heading, Link, LinkBox, LinkOverlay } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

function TabLinks() {
  const router = useRouter()
  if (router.pathname === '/')
    return (
      <Flex
        justifyContent="space-between"
        w="100%"
        mx="auto"
        py="4"
        flexDirection={['column', 'column', 'row']}
        alignItems="center"
      >
        <Heading
          fontSize={['md', 'lg', 'xl']}
          color="brand.100"
          textDecoration="underline"
          marginBottom={[2, 2, 0]}
          sx={{ textUnderlineOffset: 5 }}
        >
          View Map
        </Heading>
        <LinkBox>
          <Box className="listing-link">
            <Heading fontSize={['md', 'lg', 'xl']}>
              <Box
                color="secondaryText"
                sx={{
                  '.listing-link:hover &': {
                    color: 'brand.100',
                    textDecoration: 'underline',
                    textUnderlineOffset: 5
                  }
                }}
              >
                <NextLink href="/directory" passHref>
                  <LinkOverlay>View Directory</LinkOverlay>
                </NextLink>
              </Box>
            </Heading>
          </Box>
        </LinkBox>
        <LinkBox>
          <Box className="listing-link">
            <Heading fontSize={['md', 'lg', 'xl']}>
              <Box
                color="secondaryText"
                sx={{
                  '.listing-link:hover &': {
                    color: 'brand.100',
                    textDecoration: 'underline',
                    textUnderlineOffset: 5
                  }
                }}
              >
                <Link href={process.env.NEXT_PUBLIC_MURMURATIONS_MPG_URL}>Create Profile</Link>
              </Box>
            </Heading>
          </Box>
        </LinkBox>
      </Flex>
    )
  else if (router.pathname === '/directory')
    return (
      <Flex
        justifyContent="space-evenly"
        w={'100%'}
        mx="auto"
        py="4"
        flexDirection={['column', 'column', 'row']}
        alignItems="center"
      >
        <LinkBox>
          <Box className="map-link">
            <Heading fontSize={['md', 'lg', 'xl']} marginBottom={[2, 2, 0]}>
              <Box
                color="secondaryText"
                sx={{
                  '.map-link:hover &': {
                    color: 'brand.100',
                    textDecoration: 'underline',
                    textUnderlineOffset: 5
                  }
                }}
              >
                <NextLink href="/" passHref>
                  <LinkOverlay>View Map</LinkOverlay>
                </NextLink>
              </Box>
            </Heading>
          </Box>
        </LinkBox>
        <Heading
          fontSize={['md', 'lg', 'xl']}
          color="brand.100"
          textDecoration="underline"
          sx={{ textUnderlineOffset: 5 }}
        >
          View Directory
        </Heading>
        <LinkBox>
          <Box className="map-link">
            <Heading fontSize={['md', 'lg', 'xl']} marginBottom={[2, 2, 0]}>
              <Box
                color="secondaryText"
                sx={{
                  '.map-link:hover &': {
                    color: 'brand.100',
                    textDecoration: 'underline',
                    textUnderlineOffset: 5
                  }
                }}
              >
                <Link href={process.env.NEXT_PUBLIC_MURMURATIONS_MPG_URL}>Create Profile</Link>
              </Box>
            </Heading>
          </Box>
        </LinkBox>
      </Flex>
    )
  else return null
}
export default TabLinks
