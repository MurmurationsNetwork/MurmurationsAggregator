import * as React from "react"
import Image from 'next/image'
import { Link, Heading, Text, Spacer, Flex, Center } from "@chakra-ui/react"



function Footer() {
    return (
        <footer>
            <Flex flexDirection="column" h="140px" justifyContent="space-evenly">
                <Center>
                    <Heading size="md">
                        Would you like to learn more about the Murmurations Protocol?
                        </Heading>
                </Center>
                <Center w="75%" alignItems="center" mx="auto" color="brand.100">
                    <Link>
                        Visit our Home Site
                        </Link>
                    <Spacer />
                    <Link>
                        Find us on Github
                        </Link>
                    <Spacer />
                    <Link>
                        Principles
                        </Link>
                    <Spacer />
                    <Link>
                        FAQ
                        </Link>
                </Center>
            </Flex>
        </footer>
    )
}
export default Footer;
