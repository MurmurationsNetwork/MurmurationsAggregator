import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { Text, Heading, Flex, Box } from "@chakra-ui/react"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Directory</title>
            </Head>
            <Text>The Directory</Text>
        </div>
    )
}
