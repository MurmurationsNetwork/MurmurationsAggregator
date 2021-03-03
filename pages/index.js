import Head from 'next/head'
import dynamic from 'next/dynamic'

const Map = dynamic(
  () => import('../components/Map'), // replace '@components/map' with your component's location
  { loading: () => <p>A map is loading</p>, ssr: false } // This line is important. It's what prevents server-side render
)

export default function Home() {

    return (
      <div>
        <Head>
          <title>Map</title>
        </Head>
        <Map />
    </div>
  )
}