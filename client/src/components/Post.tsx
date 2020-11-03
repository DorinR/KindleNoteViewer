import { Box, Text } from '@chakra-ui/core'
import React from 'react'

interface PostProps {
    title: String
    content: String
    username: String
}

export const Post: React.FC<PostProps> = ({ title, content, username }) => {
    return (
        <Box backgroundColor='#CBD5E0' p={4} mt={4} rounded='lg' borderWidth='2px' borderColor='#A0AEC0' boxShadow='xl'>
            <Box>
                <Text fontSize='4xl'>{title}</Text>
            </Box>
            <Box>
                <Text fontSize='md'>{content}</Text>
            </Box>
            <Box alignContent='right'>
                <Text as='strong' color='#38B2AC'>
                    {username}
                </Text>
            </Box>
        </Box>
    )
}
