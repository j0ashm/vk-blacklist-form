import React, { useState } from 'react'
import { Flex } from '@chakra-ui/layout'
import { Button, ButtonGroup } from '@chakra-ui/button'

import TsuForm from './forms/TsuForm'
import GarForm from './forms/GarForm'
import HreForm from './forms/HreForm'

function BLForm() {
    const [current, setCurrent] = useState(null)

    if (current == null) {
        return (
            <Flex mt="5">
                <ButtonGroup variant="outline" spacing="5" size="lg">
                    <Button onClick={() => {
                        setCurrent('tsu');
                    }}>
                        TSU
                    </Button>
                    <Button onClick={() => {
                        setCurrent('gar');
                    }}>
                        GAR
                    </Button>
                    <Button onClick={() => {
                        setCurrent('hre');
                    }}>
                        HRE
                    </Button>
                </ButtonGroup>
            </Flex>
        )
    }

    if (current === 'tsu') {
        return <TsuForm />
    }
    else if (current === 'gar') {
        return <GarForm />
    }
    else if (current === 'hre') {
        return <HreForm />
    }
}

export default BLForm
