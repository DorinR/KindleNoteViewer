import { Box, Button, Flex, Link } from '@chakra-ui/core'
import React from 'react'
import NextLink from 'next/link'
import { useLogoutMutation, useMeQuery } from '../generated/graphql'

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
    const [{ data, fetching }] = useMeQuery()
    const [{ fetching: logoutFetching }, logout] = useLogoutMutation()
    let body = null

    // data is loading
    if (fetching) {
        // user not logged in
    } else if (!data?.me) {
        body = (
            <>
                <NextLink href='/login'>
                    <Link mr={4}>login</Link>
                </NextLink>
                <NextLink href='/register'>
                    <Link>register</Link>
                </NextLink>
            </>
        )
    } else {
        body = (
            <Flex>
                <Box mr={2}>{data.me.username}</Box>
                <Button isLoading={logoutFetching} onClick={() => logout()} variant='link'>
                    Logout
                </Button>
            </Flex>
        )
    }

    return (
        <Flex bg='tomato' p={4}>
            <Box ml={'auto'}>{body}</Box>
        </Flex>
    )
}
