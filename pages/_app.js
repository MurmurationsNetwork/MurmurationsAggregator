import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import { Global } from "@emotion/react"

import '../styles/globals.css'

import Layout from '../components/Layout'


const Fonts = () => (
  <Global
    styles={`

      @font-face {
        font-family: 'Libre Baskerville';
        font-style: bold;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap) format('woff2');
      }

      @font-face {
        font-family: 'Libre Baskerville';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap) format('woff2');
      }

      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.googleapis.com/css2?family=Poppins&display=swap) format('woff2');
      }

      `}
  />
)


const colors = {
  brand: {
    100: "#F96A58",
    200: "#E5A756",
    300: "#FFF8EF",
    400: "#2a69ac",
    500: "#757575",
    600: "F1F1F1"
  },
  title: "#232323",
  subtitle: "#757575",
  paragraph: "#232323"
}

const fonts = {
  heading: "Libre Baskerville",
  body: "Poppins, system-ui, sans-serif"
}

const fontSizes = {
  xs: "0.694rem",
  sm: "0.833rem",
  md: "1rem",
  lg: "1.2rem",
  xl: "1.44rem",
  "2xl": "1.728rem",
  "3xl": "2.074rem",
  "4xl": "2.488rem",
  "5xl": "2.986rem",
  "6xl": "3.583rem",
  "7xl": "4.3rem",
  "8xl": "5.16rem",
  "9xl": "6.192rem",
}

const theme = extendTheme({ colors, fonts, fontSizes })


function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
