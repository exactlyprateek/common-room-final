import { Box } from '@chakra-ui/layout'
import React from 'react'
import NavBar from './Header'

function Result() {
    return (
        <div>
			<link rel="icon" src="/favicon.ico" />

			<title>Result</title>
            <NavBar />

            <Box p="0" m="0">
                <iframe style={{width:"100%", height:"90vh", margin: "0", padding:"0"}}  src="https://ipuranklist.com/search-by-name" />
            </Box>
        </div>
    )
}

export default Result
