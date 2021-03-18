import { Box, Flex, Heading, Image, LinkBox, LinkOverlay, Spinner, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useState } from 'react'
import { useEffect } from 'react'
import ReactPaginate from 'react-paginate'

export default function Directory({ nodeData, searching, searchResults }) {
  const nodesPerPage = 10
  const [loading, setLoading] = useState(true)
  const [pageToShow, setPageToShow] = useState(0)
  const [nodePages, setNodePages] = useState([])

  const handlePageClick = data => {
    setPageToShow(data.selected)
  }

  const splitIntoPages = nodes => {
    return nodes.reduce((resultArray, node, index) => {
      const pageIndex = Math.floor(index / nodesPerPage)

      if (!resultArray[pageIndex]) {
        resultArray[pageIndex] = []
      }

      resultArray[pageIndex].push(node)

      return resultArray
    }, [])
  }

  useEffect(() => {
    if (searching) {
      let nodePagesToAdd = splitIntoPages(searchResults)
      setNodePages(nodePagesToAdd)
      setLoading(false)
    } else {
      if (nodeData) {
        let nodePagesToAdd = splitIntoPages(nodeData)
        setNodePages(nodePagesToAdd)
        setLoading(false)
      }
    }
  }, [nodeData, searching, searchResults])

  return (
    <div>
      <Head>
        <title>Directory</title>
      </Head>
      <Box
        borderWidth={2}
        borderRadius="md"
        borderColor="black"
        width="85%"
        height={'80vh'}
        margin="auto"
        padding={['1', '8']}
        paddingTop="12"
        overflowY="scroll"
      >
        {loading ? (
          <Flex h="100%" justifyContent="center" alignItems="center">
            <Spinner color="brand.100" />
          </Flex>
        ) : nodePages[pageToShow] ? (
          nodePages[pageToShow].map(node => {
            if (node.data) {
              const id = node.id
              node = node.data
              node.id = id
            }
            return (
              <div key={node.id || node.objectID}>
                <Box
                  borderWidth={2}
                  borderRadius="md"
                  borderColor="black"
                  backgroundColor="brand.600"
                  maxWidth="80%"
                  margin="auto"
                  marginBottom="4"
                  padding="4"
                >
                  <LinkBox>
                    <Flex alignItems="center">
                      {node.image && (
                        <Image
                          src={node.image[0].url}
                          alt="Node logo"
                          maxWidth={'50%'}
                          height={8}
                        />
                      )}
                      <Heading size="sm" paddingLeft="4" textDecoration="underline">
                        {node.url || node.urls ? (
                          <a
                            href={node.url || node.urls[0].url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <LinkOverlay wordBreak="break-all">{node.name}</LinkOverlay>
                          </a>
                        ) : (
                          <LinkOverlay wordBreak="break-all">{node.name}</LinkOverlay>
                        )}
                      </Heading>
                    </Flex>
                    {node.description && (
                      <Text marginTop="2">
                        {node.description.length > 350
                          ? `${node.description.slice(0, 350)}...`
                          : node.description}
                      </Text>
                    )}
                  </LinkBox>
                </Box>
              </div>
            )
          })
        ) : (
          <p>No results</p>
        )}
      </Box>
      <ReactPaginate
        previousLabel={'prev'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={nodePages.length}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  )
}
