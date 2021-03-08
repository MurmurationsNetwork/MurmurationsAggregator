import Head from 'next/head'
import dynamic from 'next/dynamic'
import useSWR from 'swr'
import fetcher from '@/utils/fetcher'
import { useState } from 'react'
import { Select } from "@chakra-ui/react"


const Map = dynamic(
  () => import('../components/Map'),
  {
    loading: () => <p>A map is loading</p>,
    ssr: false
  }
)

export default function Home({ nodeData }) {
    return (
      <div>
        <Head>
          <title>Map</title>
        </Head>
        {!nodeData ? <p>loading</p> : <Map nodes={nodeData} />}
    </div>
  )
}