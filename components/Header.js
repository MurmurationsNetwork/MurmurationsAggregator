import * as React from "react"
import Image from 'next/image'
import { Link, Heading, Text, Box, Flex, Center } from "@chakra-ui/react"



function Header() {

    return (
        <header>
            <Center h="96px">
                <Flex justify="center">
                    <Image
                        src="/images/murmurations-logo.png"
                        alt="Murmurations logo"
                        width={102}
                        height={70}
                    />
                    <Box>
                        <Heading as="h1" size="lg" color="title">
                            Murmurations
                        </Heading>
                        <Heading as="h2" size="sm" color="subtitle">
                            Making Movements Visible
                        </Heading>
                    </Box>
                </Flex>
            </Center>
        </header>
    )
}

export default Header
