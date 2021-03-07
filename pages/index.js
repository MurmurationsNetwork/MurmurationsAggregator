import Head from 'next/head'
import dynamic from 'next/dynamic'
import useSWR from 'swr'
import fetcher from '@/utils/fetcher'

const Map = dynamic(
  () => import('../components/Map'),
  {
    loading: () => <p>A map is loading</p>,
    ssr: false
  }
)

export default function Home() {
  const { data, error } = useSWR('/api/nodes', fetcher)

    return (
      <div>
        <Head>
          <title>Map</title>
        </Head>
        {!data ? <p>loading</p> : <Map nodes={data} />}
    </div>
  )
}