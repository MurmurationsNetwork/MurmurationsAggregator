import Head from 'next/head'
import NextLink from "next/link"
import { Text, Image, Heading, Flex, Box, LinkBox, LinkOverlay } from "@chakra-ui/react"


export default function Directory({ nodeData }) {

    return (
        <div>
            <Head>
                <title>Directory</title>
            </Head>
            <Box borderWidth={2} borderRadius="md" borderColor="black" width="85%" height={"80vh"} margin="auto" padding={["1", "8"]} paddingTop="12" overflowY="scroll" >
                {!nodeData ? <p>loading</p> :
                    nodeData.map((node) => {
                        return (
                            <div key={node.id}>
                                <Box borderWidth={2} borderRadius="md" borderColor="black" backgroundColor="brand.600" maxWidth="80%" margin="auto" marginBottom="4" padding="4">
                                    <LinkBox>
                                        <Flex alignItems="center">
                                            <Image
                                                src={node.data.image ? node.data.image[0].url : '/images/vercel.svg'}
                                                alt="Node logo"
                                                width={8}
                                                height={8}
                                            />
                                            <Heading size="sm" paddingLeft="4" textDecoration="underline">
                                                <a href={node.data.url || '/diretory'} target="_blank" rel="noopener noreferrer">
                                                    <LinkOverlay>{node.data.name}</LinkOverlay>
                                                </a>
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
