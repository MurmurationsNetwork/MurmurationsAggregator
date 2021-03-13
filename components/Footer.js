import * as React from "react"
import { Link, Heading, Text, Spacer, Flex, Center } from "@chakra-ui/react"



function Footer() {
    return (
        <footer>
            <Flex flexDirection="column" h={["220px", "220px", "140px"]} justifyContent="space-evenly">
                <Heading fontSize={["md", "md", "lg"]} textAlign="center" mb={0}>
                    Would you like to learn more about the Murmurations Protocol?
                </Heading>
                <Center w="75%" alignItems="center" mx="auto" color="brand.100" flexDirection={["column", "column", "row"]}>
                    <Link mb={[1, 1, 0]} href="https://murmurations.network/" isExternal>
                        Visit our Home Site
                    </Link>
                    <Spacer />
                    <Link mb={[1, 1, 0]} href="https://github.com/MurmurationsNetwork/MurmurationsProtocol" isExternal>
                        Find us on Github
                    </Link>
                    <Spacer />
                    <Link mb={[1, 1, 0]} href="https://murmurations.network/principles/" isExternal>
                        Principles
                    </Link>
                    <Spacer />
                    <Link mb={[1, 1, 0]} href="https://murmurations.network/faq/" isExternal>
                        FAQ
                    </Link>
                </Center>
            </Flex>
        </footer>
    )
}
export default Footer;
