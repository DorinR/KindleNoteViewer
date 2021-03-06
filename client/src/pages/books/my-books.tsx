import React from 'react'
import { Center, Spinner, Text } from '@chakra-ui/react'
import { useGetUserBooksQuery } from '../../generated/graphql'
import genBox from '../../components/component-gen/genBox'

const MyBooks: React.FC = ({}) => {
    const [{ data, fetching }] = useGetUserBooksQuery()
    let renderedBooks = null

    if (fetching) {
        // do nothing (maybe add loading animation later)
    } else {
        let userBooks: JSX.Element[] = []
        let key = 1
        if (data?.getUserBooks.books) {
            data?.getUserBooks.books.forEach((book) => {
                userBooks.push(genBox(book, key))
                key += 1
            })
        }
        renderedBooks = userBooks
    }

    return (
        <>
            <Text fontSize='5xl' mb={4}>
                my books
            </Text>
            {fetching ? (
                <Center>
                    <Spinner size='xl' mt={10} />
                </Center>
            ) : (
                renderedBooks
            )}
        </>
    )
}

export default MyBooks
