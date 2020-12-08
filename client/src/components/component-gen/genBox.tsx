import React from 'react'
import NextLink from 'next/link'
import { Box, useColorModeValue } from '@chakra-ui/react'
import { Book } from '../../utils/types/highlightParser'

const genBox = (book: Book, key: number) => {
    // dark/light mode stylings
    const borderColor = useColorModeValue('grey.300', 'grey.400')
    const backgroundColor = useColorModeValue('#FAFAFA', '#2C323D')
    const color = useColorModeValue('grey.600', 'white')
    const onHoverBoxShadow = useColorModeValue('lg', '0 0 10px -2px grey')
    const borderWidth = useColorModeValue('1px', '2px')

    const onHoverStyle = {
        shadow: 'lg',
        boxShadow: onHoverBoxShadow,
    }

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
                borderWidth={borderWidth}
                color={color}
                rounded='lg'
                transitionDuration='0.2s'
                _hover={onHoverStyle}>
                {book.title}
            </Box>
        </NextLink>
    )
}

export default genBox
