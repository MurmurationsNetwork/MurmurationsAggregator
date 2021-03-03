import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { Text, Heading, Flex, Box } from "@chakra-ui/react"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Directory</title>
            </Head>
            <Flex borderWidth={2} borderRadius="md" borderColor="black" width="85%" margin="auto" padding="8" >
                <Text>The Directory</Text>
            </Flex>
        </div>
    )
}
