import React from 'react'
import { Flex, Box, Heading } from '@chakra-ui/layout'

function Header() {
    return (
        <Flex mt="3" borderBottom="1px">
            <Box p="3">
                <Heading size="lg">V&K Blacklist Form</Heading>
            </Box>
        </Flex>
    )
}

export default Header
