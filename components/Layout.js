import * as React from "react"
import { useState } from 'react'
import useSWR from 'swr'

import { Box, Select } from "@chakra-ui/react"

import fetcher from '@/utils/fetcher'

import Header from "./Header"
import Footer from "./Footer"
import TabLinks from "./TabLinks"


function Layout({ children, setSchema }) {
    const handleChange = (value) => {
        if (value) {
            setSchema(value)
        } else {
            setSchema('all')
        }
    }

    return (
        <div>
            <Header />
            <main>
                <Box bg="brand.300" py="5">
                    <TabLinks />
                    <Select pos="absolute" top="25%" right="10%" zIndex="1000" width="25%" borderColor="brand.100" borderWidth="2px" bg="brand.600" placeholder="Select schema" onChange={(e) => handleChange(e.target.value)}>
                        <option value="complementary_currencies-v1"> Complementary Currency schema </option>
                        <option value="murmurations_map-v1">Murmurations map schema</option>
                        <option value="all">Apply all schemas</option>
                    </Select>
                    {children}
                </Box>
            </main>
            <Footer />
        </div>
    )
}

export default Layout
