import React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'

interface SectionHeadingProps {
    id: string
    heading: string
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ id, heading }) => {
    return (
        <NextLink href={`/books/${id}`}>
            <Box layerStyle={'highlightBox' + useColorModeValue('', '_dark')}>{heading}</Box>
        </NextLink>
    )
}

export default SectionHeading
