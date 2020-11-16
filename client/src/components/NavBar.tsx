import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'
import { useLogoutMutation, useMeQuery } from '../generated/graphql'

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
    const [{ data, fetching }, runMeQuery] = useMeQuery()
    const [, logout] = useLogoutMutation()

    let accountLinks = null

    const handleLogout = () => {
        logout()
        runMeQuery()
    }

    if (fetching) {
        // don't display anything
    } else if (!data?.me) {
        accountLinks = (
            <>
                <NextLink href='/login'>
                    <Button variantColor='teal' variant='ghost'>
                        login
                    </Button>
                </NextLink>
                <NextLink href='/register'>
                    <Button variantColor='teal' variant='ghost'>
                        register
                    </Button>
                </NextLink>
            </>
        )
    } else {
        accountLinks = (
            <Flex align='center'>
                <Box mr={2}>{data.me.username}</Box>
                <Button onClick={() => handleLogout()} variantColor='red' variant='ghost'>
                    Logout
                </Button>
            </Flex>
        )
    }

    return (
        <Flex maxWidth='800px' p={4} align='center' m={'auto'}>
            <Box mr={'auto'}>
                <NextLink href='/'>
                    <Text color='teal'>principles</Text>
                </NextLink>
                {data?.me ? (
                    <NextLink href='/posts/create-post'>
                        <Button size='sm' mr={4} variantColor='teal'>
                            create post
                        </Button>
                    </NextLink>
                ) : null}
                <NextLink href='/posts/posts'>
                    <Button size='sm' variantColor='green'>
                        view posts
                    </Button>
                </NextLink>
            </Box>
            <Box ml={'auto'}>{accountLinks}</Box>
        </Flex>
    )
}
