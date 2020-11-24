import React from 'react'
import { FormShaper } from '../../components/FormShaper'
import { NavBar } from '../../components/NavBar'
import { Text, Box, useColorModeValue } from '@chakra-ui/react'
import { Book } from '../../utils/types/highlightParser'
import { randomNumber } from '../../utils/randomNumber'
import NextLink from 'next/link'

const MyBooks: React.FC = ({}) => {
    let renderedBooks = null
    let mockBooks: Book[] = [
        {
            id: '1',
            title: 'Porn Generation',
            author: 'Ben Shapiro',
        },
        {
            id: '2',
            title: 'Courage to be Disliked',
            author: 'Hikaru Nakamura',
        },
    ]

    setTimeout(() => {
        mockBooks = [
            {
                id: '1',
                title: 'Porn Generation',
                author: 'Ben Shapiro',
            },
            {
                id: '2',
                title: 'Courage to be Disliked',
                author: 'Hikaru Nakamura',
            },
        ]
        console.log('updating mockbooks...')
        console.log(mockBooks)
    }, 3000)

    const borderColor = useColorModeValue('grey.300', 'white')
    const backgroundColor = useColorModeValue('#FAFAFA', '#2C323D')
    const color = useColorModeValue('grey.600', 'white')
    const onHoverBoxShadow = useColorModeValue('lg', '0 0 15px -2px white')

    const onHoverStyle = {
        shadow: 'lg',
        boxShadow: onHoverBoxShadow,
    }

    const getBox = (book: Book) => {
        return (
            <NextLink href={`/books/${book.id}`}>
                <Box
                    mb={5}
                    p={4}
                    fontWeight='semibold'
                    cursor='pointer'
                    as='h2'
                    key={randomNumber(1, 1000000)}
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
    if (mockBooks.length == 0) {
        // do nothing
    } else {
        console.log('should run after mockboooks gets updated')
        let userBooks: JSX.Element[] = []
        mockBooks.forEach((book) => {
            userBooks.push(getBox(book))
        })
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
