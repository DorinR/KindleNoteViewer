import React from 'react'
import { FormShaper } from '../../components/FormShaper'
import { NavBar } from '../../components/NavBar'
import { Text } from '@chakra-ui/react'
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
            <NavBar />
            <FormShaper>
                <Text fontSize='5xl' mb={4}>
                    books
                </Text>
                {renderedBooks ? renderedBooks : null}
            </FormShaper>
        </>
    )
}

export default MyBooks
