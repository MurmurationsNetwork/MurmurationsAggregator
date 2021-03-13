import * as React from "react"
import NextLink from "next/link"
import { useRouter } from 'next/router'
import { Heading, Flex, Box, LinkBox, LinkOverlay } from "@chakra-ui/react"


function TabLinks() {
    const router = useRouter()
    if (router.pathname === '/')
        return (
            <Flex justifyContent="space-evenly" w={["70%", "70%", "100%"]} mx="auto" py="4" flexDirection={["column", "column", "row"]} alignItems="center">
                <Heading fontSize={["lg", "lg", "xl"]} color="brand.100" textDecoration="underline" marginBottom={[2, 2, 0]} sx={{ textUnderlineOffset: 5 }}>
                    View Map
                </Heading>
                <LinkBox>
                    <Box className="listing-link">
                        <Heading fontSize={["lg", "lg", "xl"]}>
                            <Box color="secondaryText"
                                sx={{
                                    ".listing-link:hover &": {
                                        color: "brand.100",
                                        textDecoration: "underline",
                                        textUnderlineOffset: 5
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
            <Flex justifyContent="space-evenly" w={["70%", "70%", "100%"]} mx="auto" py="4" flexDirection={["column", "column", "row"]} alignItems="center">
                <LinkBox>
                    <Box className="map-link">
                        <Heading fontSize={["lg", "lg", "xl"]} marginBottom={[2, 2, 0]}>
                            <Box color="secondaryText"
                                sx={{
                                    ".map-link:hover &": {
                                        color: "brand.100",
                                        textDecoration: "underline",
                                        textUnderlineOffset: 5
                                    },
                                }}>
                                <NextLink href="/" passHref>
                                    <LinkOverlay>View Map</LinkOverlay>
                                </NextLink>
                            </Box>
                        </Heading>
                    </Box>
                </LinkBox>
                <Heading fontSize={["lg", "lg", "xl"]} color="brand.100" textDecoration="underline" sx={{ textUnderlineOffset: 5 }}>
                    View directory listing
                </Heading>
            </Flex>
        )
    else return null;
}
export default TabLinks;
