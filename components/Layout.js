import * as React from "react"
import { Box, Select } from "@chakra-ui/react"

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
                <Box bg="brand.300" py={["0", "0"]}>
                    <Box display={["block", "block", "none"]}>
                        <TabLinks />
                    </Box>
                    <Select pos="absolute" top={["20%", "21%", "15%"]} right="10%" zIndex="1000" width={["70%", "70%", "30%"]} borderColor="brand.100" borderWidth="2px" bg="brand.500" placeholder="Select schema" onChange={(e) => handleChange(e.target.value)}>
                        <option value="complementary_currencies-v1"> Complementary Currency schema </option>
                        <option value="murmurations_map-v1">Murmurations map schema</option>
                        <option value="test_schema-v1">Test Schema</option>
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
