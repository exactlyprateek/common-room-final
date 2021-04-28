import { Box } from '@chakra-ui/layout'
import React from 'react'
import NavBar from './Header'

function common() {
    return (
        <div>
            <NavBar />
            <Box m="10">
                Common Room
            </Box>
        </div>
    )
}

export default common;
