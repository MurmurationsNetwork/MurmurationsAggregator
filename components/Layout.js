import * as React from "react"
import { Box, Select, Input, Flex, InputGroup, InputRightElement, CloseButton } from "@chakra-ui/react"
import { useRouter } from 'next/router'

import Header from "./Header"
import Footer from "./Footer"
import TabLinks from "./TabLinks"


function Layout({ children, setSchema, handleSearch, searching }) {
    const router = useRouter()
    const [input, setInput] = React.useState("")
    const handleSchemaChange = (value) => {
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
                    {searching ?
                        null
                        :
                        <Select pos="absolute" top={[`${router.pathname === '/' ? '26%' : '23.5%'}`, "19%", "17%"]}
                            right="10%"
                            zIndex="1000"
                            width={["70%", "70%", "30%"]}
                            borderColor="brand.100"
                            borderWidth="2px"
                            bg="brand.500"
                            placeholder="Select schema"
                            onChange={(e) => handleSchemaChange(e.target.value)}
                        >
                            <option value="complementary_currencies-v1"> Complementary Currency schema </option>
                            <option value="murmurations_map-v1">Murmurations map schema</option>
                            <option value="test_schema-v1">Test Schema</option>
                            <option value="all">Apply all schemas</option>
                        </Select>
                    }
                    <Flex justifyContent="center" py="2" >
                        <InputGroup width={["70%", "70%", "40%"]}>
                            <Input placeholder="Search"
                                borderColor="brand.100"
                                borderWidth="2px"
                                bg="brand.500"
                                value={input}
                                onChange={(e) => {
                                    setInput(e.target.value);
                                    handleSearch(e.target.value);
                                }}
                        />
                            {input.length > 0 ? <InputRightElement children={<CloseButton type="button" onClick={() => { setInput(""); handleSearch(""); }} />} /> : null}
                        </InputGroup>

                    </Flex>

                    {children}
                </Box>
            </main>
            <Footer />
        </div>
    )
}

export default Layout
