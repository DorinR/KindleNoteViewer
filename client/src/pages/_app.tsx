import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { Provider, createClient } from 'urql'
import theme from '../theme'

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
            <ThemeProvider theme={theme}>
                <CSSReset />
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    )
}

export default MyApp
