import React from 'react'
import { Flex, Box, Heading, Spacer } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button'
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode'
import { FaMoon } from 'react-icons/fa'
import { BsFillSunFill } from 'react-icons/bs'

function Header() {
    const { colorMode, toggleColorMode } = useColorMode()
    const icons = useColorModeValue(<FaMoon />, <BsFillSunFill />)

    return (
        <Flex mt="3" borderBottom="1px">
            <Box p="3">
                <Heading size="lg">V&K Blacklist Form</Heading>
            </Box>
            <Spacer />
            <Box p="3">
                <IconButton icon={icons} variant="ghost" onClick={toggleColorMode} aria-label={colorMode == 'light' ? "Switch to dark mode" : "Switch to light mode"}/>
            </Box>
        </Flex>
    )
}

export default Header
