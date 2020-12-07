import { Box, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'

const genHeading = (id: string, heading: string, key: number) => {
    return (
        <NextLink href={`/books/section/${id}`} key={key}>
            <Box layerStyle={'standardShadowBox' + useColorModeValue('', '_dark')}>{`${key}. ${heading}`}</Box>
        </NextLink>
    )
}

export default genHeading
