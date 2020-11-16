import { Box, Button, Flex, Text, useColorMode, IconButton } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'
import { useLogoutMutation, useMeQuery } from '../generated/graphql'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
    const [{ data, fetching }, runMeQuery] = useMeQuery()
    const [, logout] = useLogoutMutation()
    const { colorMode, toggleColorMode } = useColorMode()

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
                    <Button variant='ghost'>login</Button>
                </NextLink>
                <NextLink href='/register'>
                    <Button variant='ghost'>register</Button>
                </NextLink>
            </>
        )
    } else {
        accountLinks = (
            <Flex align='center'>
                <Box mr={2}>{data.me.username}</Box>
                <Button onClick={() => handleLogout()} variant='ghost'>
                    Logout
                </Button>
            </Flex>
        )
    }

    return (
        <Flex maxWidth='800px' p={4} align='center' m={'auto'}>
            <Box mr={'auto'}>
                <NextLink href='/'>
                    <Button mr={4}>kindle notes</Button>
                </NextLink>
                {data?.me ? (
                    <NextLink href='/posts/create-post'>
                        <Button size='sm' mr={4}>
                            create post
                        </Button>
                    </NextLink>
                ) : null}
                <NextLink href='/posts/posts'>
                    <Button variant='ghost'>view posts</Button>
                </NextLink>
            </Box>
            <IconButton
                onClick={toggleColorMode}
                aria-label='Dark Mode'
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}></IconButton>
            <Box ml={'auto'}>{accountLinks}</Box>
        </Flex>
    )
}
