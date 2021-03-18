import '../styles/globals.css'

import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { debounce } from 'lodash'
import { useState } from 'react'
import useSWR from 'swr'

import { algoliaSearchClient } from '@/lib/algolia'
import fetcher from '@/utils/fetcher'

import Layout from '../components/Layout'

const Fonts = () => (
  <Global
    styles={`
    /* devanagari */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJbecnFHGPezSQ.woff2) format('woff2');
      unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJnecnFHGPezSQ.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

      `}
  />
)

const colors = {
  brand: {
    100: '#F96A58',
    200: '#E5A756',
    300: '#FFF8EF',
    400: '#757575',
    500: '#F1F1F1'
  },
  text: '#232323',
  secondaryText: '#757575'
}

const fonts = {
  heading: 'Poppins, system-ui, sans-serif',
  body: 'Poppins, system-ui, sans-serif'
}

const fontSizes = {
  xs: '0.694rem',
  sm: '0.833rem',
  md: '1rem',
  lg: '1.2rem',
  xl: '1.44rem',
  '2xl': '1.728rem',
  '3xl': '2.074rem',
  '4xl': '2.488rem',
  '5xl': '2.986rem',
  '6xl': '3.583rem',
  '7xl': '4.3rem',
  '8xl': '5.16rem',
  '9xl': '6.192rem'
}

const styles = {
  global: {
    '.leaflet-popup-content-wrapper': {
      backgroundColor: 'brand.200'
    }
  }
}

const theme = extendTheme({ styles, colors, fonts, fontSizes })

function MyApp({ Component, pageProps }) {
  useSWR(`/api/node-index?last_validated=${Math.floor((Date.now() - 7200000) / 1000)}`, fetcher)

  const [schema, setSchema] = useState('all')
  const { data, error } = useSWR(
    schema === 'all' ? '/api/nodes' : `/api/nodes?schema=${schema}`,
    fetcher
  )
  if (error) console.error('SWR error', error)

  const index = algoliaSearchClient.initIndex(process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_INDEX)
  const [searching, setSearching] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const delayedSearch = debounce(query => {
    index.search(query).then(function (responses) {
      setSearchResults(responses.hits)
    })
  }, 1000)

  const handleSearch = query => {
    if (query.length > 2) {
      setSearching(true)
      delayedSearch(query)
    } else {
      setSearching(false)
    }
  }

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout setSchema={setSchema} handleSearch={handleSearch} searching={searching}>
        <Component
          {...pageProps}
          nodeData={data}
          searchResults={searchResults}
          searching={searching}
        />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
