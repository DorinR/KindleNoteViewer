import { Skeleton, Text, Box, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

interface BookHeaderProps {
    title: string | null | undefined
    author: string | null | undefined
    isLoading: boolean
}

const BookHeader: React.FC<BookHeaderProps> = ({ title, author, isLoading }) => {
    return (
        <>
            {isLoading ? (
                <>
                    <Skeleton mb={4} height='50px' />
                    <Skeleton height='30px' mb={5} />
                </>
            ) : (
                <Box layerStyle={`titleAuthorBox` + useColorModeValue('', '_dark')}>
                    <Text fontSize='5xl'>{title}</Text>
                    <Text fontSize='2xl' as='i'>
                        {author}
                    </Text>
                </Box>
            )}
        </>
    )
}

export default BookHeader
