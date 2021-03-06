import React from 'react'
import { Box, Flex, Spacer, Text } from '@chakra-ui/layout'

function Footer() {
    return (
        <Flex borderTop="1px" mt="5">
            <Box p="2">
                <Text>👩‍💻 by the one and only JustinOleski 👀</Text>
            </Box>
            <Spacer />
            <Box p="2">
                <Text align="right">Reload the page to pick a different form</Text>
            </Box>
        </Flex>
    )
}

export default Footer
