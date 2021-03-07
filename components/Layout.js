import * as React from "react"
import { Box } from "@chakra-ui/react"

import Header from "./Header"
import Footer from "./Footer"
import TabLinks from "./TabLinks"


function Layout({ children }) {

    return (
        <div>
            <Header />
            <main>
                <Box bg="brand.300" py="5">
                    <TabLinks />
                    {children}
                </Box>
            </main>
            <Footer />
        </div>
    )
}

export default Layout
