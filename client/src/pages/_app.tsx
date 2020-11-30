import { ChakraProvider } from '@chakra-ui/react'
import { Provider, createClient } from 'urql'

console.log('process.env.NEXT_PUBLIC_API_URL', process.env.NEXT_PUBLIC_API_URL)
const client = createClient({
    url: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/graphql',
    fetchOptions: {
        credentials: 'include',
    },
    requestPolicy: 'network-only',
})

function MyApp({ Component, pageProps }: any) {
    return (
        <Provider value={client}>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </Provider>
    )
}

export default MyApp
