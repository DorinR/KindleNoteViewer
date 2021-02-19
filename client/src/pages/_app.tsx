import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React from 'react'
import { Provider, createClient } from 'urql'
import { FormShaper } from '../components/FormShaper'
import { NavBar } from '../components/NavBar'
import { titleAuthorBoxStyles, highlightBoxStyles, standardShadowBoxStyles } from '../theme/box'

console.log('process.env.NEXT_PUBLIC_API_URL', process.env.NEXT_PUBLIC_API_URL)
const client = createClient({
    url: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/graphql',
    fetchOptions: {
        credentials: 'include',
    },
    requestPolicy: 'network-only',
})

const theme = extendTheme({
    layerStyles: {
        ...titleAuthorBoxStyles,
        ...highlightBoxStyles,
        ...standardShadowBoxStyles,
    },
})

function MyApp({ Component, pageProps }: any) {
    return (
        <Provider value={client}>
            <ChakraProvider theme={theme}>
                <>
                    <NavBar />
                    <FormShaper>
                        <Component {...pageProps} />
                    </FormShaper>
                </>
            </ChakraProvider>
        </Provider>
    )
}

export default MyApp
