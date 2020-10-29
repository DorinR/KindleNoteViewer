import { Box, Button, Flex } from '@chakra-ui/core'
import React from 'react'
import NextLink from 'next/link'
import { useLogoutMutation, useMeQuery } from '../generated/graphql'

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
    const [{ data, fetching }] = useMeQuery()
    const [, logout] = useLogoutMutation()
    let accountLinks = null

    const handleLogout = () => {
        logout()
        location.reload()
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
            <NextLink href='/'>
                <Box mr={'auto'}>
                    <strong>Generic</strong>
                </Box>
            </NextLink>
            <Box ml={'auto'}>{accountLinks}</Box>
        </Flex>
    )
}
