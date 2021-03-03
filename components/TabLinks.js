import * as React from "react"
import NextLink from "next/link"
import { useRouter } from 'next/router'
import { Heading, Flex, Box, LinkBox, LinkOverlay } from "@chakra-ui/react"


function TabLinks() {
    const router = useRouter()
    if (router.pathname === '/')
        return (
            <Flex justifyContent="space-evenly" w="50%" mx="auto" py="4">
                <Heading size="md" color="brand.100" textDecoration="underline" sx={{ textUnderlineOffset: 10 }}>
                    View Map
                </Heading>
                <LinkBox>
                    <Box className="listing-link">
                        <Heading size="md">
                            <Box color="brand.500"
                                sx={{
                                    ".listing-link:hover &": {
                                        color: "brand.100",
                                        textDecoration: "underline",
                                        textUnderlineOffset: 10
                                    },
                                }}>
                                <NextLink href="/directory" passHref>
                                    <LinkOverlay>View directory listing</LinkOverlay>
                                </NextLink>
                            </Box>
                        </Heading>
                    </Box>
                </LinkBox>

            </Flex>
        )
    else if (router.pathname === '/directory')
        return (
            <Flex justifyContent="space-evenly" w="50%" mx="auto" py="4">
                <LinkBox>
                    <Box className="map-link">
                        <Heading size="md">
                            <Box color="brand.500"
                                sx={{
                                    ".map-link:hover &": {
                                        color: "brand.100",
                                        textDecoration: "underline",
                                        textUnderlineOffset: 10
                                    },
                                }}>
                                <NextLink href="/" passHref>
                                    <LinkOverlay>View Map</LinkOverlay>
                                </NextLink>
                            </Box>
                        </Heading>
                    </Box>
                </LinkBox>
                <Heading size="md" color="brand.100" textDecoration="underline" sx={{ textUnderlineOffset: 10 }}>
                    View directory listing
                </Heading>
            </Flex>
        )
}
export default TabLinks;
