import React from 'react'
import { FormShaper } from '../../components/FormShaper'
import { NavBar } from '../../components/NavBar'
import { Text, Box, useColorModeValue } from '@chakra-ui/react'
import { Book } from '../../utils/types/highlightParser'
import NextLink from 'next/link'
import { useGetUserBooksQuery } from '../../generated/graphql'

const MyBooks: React.FC = ({}) => {
    const [{ data, fetching }] = useGetUserBooksQuery()
    let renderedBooks = null

    // dark/light mode stylings
    const borderColor = useColorModeValue('grey.300', 'white')
    const backgroundColor = useColorModeValue('#FAFAFA', '#2C323D')
    const color = useColorModeValue('grey.600', 'white')
    const onHoverBoxShadow = useColorModeValue('lg', '0 0 15px -2px white')

    const onHoverStyle = {
        shadow: 'lg',
        boxShadow: onHoverBoxShadow,
    }

    const getBox = (book: Book, key: number) => {
        return (
            <NextLink href={`/books/${book.id}`} key={key}>
                <Box
                    mb={5}
                    p={4}
                    fontWeight='semibold'
                    cursor='pointer'
                    as='h2'
                    key={key}
                    bg={backgroundColor}
                    borderColor={borderColor}
                    borderWidth='1px'
                    color={color}
                    rounded='lg'
                    transitionDuration='0.2s'
                    _hover={onHoverStyle}>
                    {book.title}
                </Box>
            </NextLink>
        )
    }
    if (fetching) {
        // do nothing (maybe add loading animation later)
    } else {
        let userBooks: JSX.Element[] = []
        let key = 1
        if (data?.getUserBooks.books) {
            data?.getUserBooks.books.forEach((book) => {
                userBooks.push(getBox(book, key))
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
                    My Books
                </Text>
                {renderedBooks ? renderedBooks : null}
            </FormShaper>
        </>
    )
}

export default MyBooks
