import { Flex, Spinner } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Head from 'next/head'

const Map = dynamic(() => import('../components/Map'), {
  // eslint-disable-next-line
  loading: () => (
    <Flex h="70vh" justifyContent="center" alignItems="center">
      <Spinner color="brand.100" />
    </Flex>
  ),
  ssr: false
})

export default function Home({ nodeData, searching, searchResults }) {
  let nodes = []
  if (searching) {
    nodes = searchResults
  } else {
    nodes = nodeData
  }
  return (
    <div>
      <Head>
        <title>Map</title>
      </Head>
      {!nodeData ? (
        <Flex h="70vh" justifyContent="center" alignItems="center">
          <Spinner color="brand.100" />
        </Flex>
      ) : nodes ? (
        <Map nodes={nodes} />
      ) : (
        <p>No results found</p>
      )}
    </div>
  )
}
