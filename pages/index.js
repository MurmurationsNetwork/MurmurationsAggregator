import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Spinner, Flex } from "@chakra-ui/react"


const Map = dynamic(
  () => import('../components/Map'),
  {
    loading: () =>
      <Flex h="70vh" justifyContent="center" alignItems='center'>
        <Spinner color="brand.100" />
      </Flex>,
    ssr: false
  }
)

export default function Home({ nodeData }) {
    return (
      <div>
        <Head>
          <title>Map</title>
        </Head>
        {!nodeData ?
          <Flex h="70vh" justifyContent="center" alignItems='center'>
            <Spinner color="brand.100" />
          </Flex>
          :
          <Map nodes={nodeData} />}
    </div>
  )
}