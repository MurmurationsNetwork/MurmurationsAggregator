import Head from 'next/head'
import NextLink from "next/link"
import useSWR from 'swr'
import { Text, Image, Heading, Flex, Box, LinkBox, LinkOverlay } from "@chakra-ui/react"

import fetcher from '@/utils/fetcher'


export default function Directory() {
    const { data, error } = useSWR('/api/nodes', fetcher)
    return (
        <div>
            <Head>
                <title>Directory</title>
            </Head>
            <Box borderWidth={2} borderRadius="md" borderColor="black" width="85%" height="400px" margin="auto" padding="8" overflowY="scroll" >
                {!data ? <p>loading</p> :
                    data.map((node) => {
                        return (
                            <div key={node.id}>
                                <Box borderWidth={2} borderRadius="md" borderColor="black" backgroundColor="brand.600" width="65%" margin="auto" marginBottom="4" padding="4">
                                    <LinkBox>
                                        <Flex alignItems="center">
                                            <Image
                                                src={node.data.image[0].url}
                                                alt="Node logo"
                                                width={8}
                                                height={8}
                                            />
                                            <Heading size="sm" paddingLeft="4" textDecoration="underline">
                                                <NextLink href={node.data.url} passHref>
                                                    <LinkOverlay>{node.data.name}</LinkOverlay>
                                                </NextLink>
                                            </Heading>
                                        </Flex>
                                        <Text marginTop="2">{node.data.description}</Text>
                                    </LinkBox>
                                </Box>
                            </div>
                        );
                    })
                }
            </Box>
        </div>
    )
}
