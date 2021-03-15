import Head from 'next/head'
import ReactPaginate from 'react-paginate';
import { Text, Image, Heading, Flex, Box, LinkBox, LinkOverlay, Spinner } from "@chakra-ui/react"
import { useState } from 'react';
import { useEffect } from 'react';


export default function Directory({ nodeData }) {

    const nodesPerPage = 10;
    const [loading, setLoading] = useState(true);
    const [pageToShow, setPageToShow] = useState(0);
    const [nodePages, setNodePages] = useState([]);

    useEffect(() => {
        if (nodeData) {
            let nodePagesToAdd = nodeData.reduce((resultArray, node, index) => {
                const pageIndex = Math.floor(index / nodesPerPage);

                if (!resultArray[pageIndex]) {
                    resultArray[pageIndex] = [];
                }

                resultArray[pageIndex].push(node);

                return resultArray;
            }, [])
            setNodePages(nodePagesToAdd);
            setLoading(false);
        }
    }, [nodeData])

    const handlePageClick = (data) => {
        setPageToShow(data.selected);
    }

    return (
        <div>
            <Head>
                <title>Directory</title>
            </Head>
            <Box borderWidth={2} borderRadius="md" borderColor="black" width="85%" height={"80vh"} margin="auto" padding={["1", "8"]} paddingTop="12" overflowY="scroll" >
                {loading ?
                    <Flex h="100%" justifyContent="center" alignItems='center'>
                        <Spinner color="brand.100" />
                    </Flex> :
                    nodePages[pageToShow].map((node) => {
                        return (
                            <div key={node.id}>
                                <Box borderWidth={2} borderRadius="md" borderColor="black" backgroundColor="brand.600" maxWidth="80%" margin="auto" marginBottom="4" padding="4">
                                    <LinkBox>
                                        <Flex alignItems="center">
                                            {node.data.image &&
                                             <Image
                                                src={node.data.image[0].url}
                                                alt="Node logo"
                                                maxWidth={"50%"}
                                                height={8}
                                            />
                                            }

                                            <Heading size="sm" paddingLeft="4" textDecoration="underline">
                                                {
                                                    node.data.url || node.data.urls ?
                                                        <a href={node.data.url || node.data.urls[0].url} target="_blank" rel="noopener noreferrer">
                                                            <LinkOverlay wordBreak="break-all">{node.data.name}</LinkOverlay>
                                                        </a>
                                                        :
                                                        <LinkOverlay wordBreak="break-all">{node.data.name}</LinkOverlay>
                                                }

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
            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={nodePages.length}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} />
        </div>
    )
}
