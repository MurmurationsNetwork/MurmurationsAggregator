import * as React from "react"
import Image from 'next/image'
import { Link, Heading, Text, Box, Flex, Center } from "@chakra-ui/react"



function Header() {

    return (
        <header>
            <Center h="96px">
                <Flex justify="center" w={['80%', "80", '100%']}>
                    <Image
                        src="/images/murmurations-logo.png"
                        alt="Murmurations logo"
                        width={"100%"}
                        height={"70%"}
                    />
                    <Box paddingTop="2">
                        <Heading as="h1" fontSize="xl" color="title">
                            Murmurations
                        </Heading>
                        <Heading as="h2" fontSize={["sm", "sm", "md"]} color="subtitle">
                            Making Movements Visible
                        </Heading>
                    </Box>
                </Flex>
            </Center>
        </header>
    )
}

export default Header
