import { Box, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'

interface getHeadingProps {
    id?: string
    text: string
    key: number
}

const genHeading: React.FC<getHeadingProps> = ({ id, text, key }) => {
    if (id) {
        return (
            <NextLink href={`/books/section/${id}`} key={key}>
                <Box layerStyle={'standardShadowBoxButton' + useColorModeValue('', '_dark')}>{`${text}`}</Box>
            </NextLink>
        )
    } else {
        return <Box layerStyle={'standardShadowBox' + useColorModeValue('', '_dark')}>{`${text}`}</Box>
    }
}

export default genHeading
