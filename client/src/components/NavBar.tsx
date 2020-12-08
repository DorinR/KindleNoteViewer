import { Box, Button, Flex, useColorMode, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'
import { useLogoutMutation, useMeQuery } from '../generated/graphql'
import { MoonIcon, SunIcon, AddIcon, HamburgerIcon, Icon } from '@chakra-ui/icons'
import { BiLogOut, BiLogIn, BiHomeSmile } from 'react-icons/bi'
import { TiUserAddOutline } from 'react-icons/ti'

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
    const [{ data, fetching }, runMeQuery] = useMeQuery()
    const [, logout] = useLogoutMutation()
    const { colorMode, toggleColorMode } = useColorMode()

    let accountLinks = null

    const handleLogout = async () => {
        await logout()
        runMeQuery()
    }

    if (fetching) {
        // don't display anything
    } else if (!data?.me) {
        accountLinks = (
            <>
                <NextLink href='/login'>
                    <Button variant='ghost' leftIcon={<Icon as={BiLogIn} />}>
                        login
                    </Button>
                </NextLink>
                <NextLink href='/register'>
                    <Button variant='ghost' leftIcon={<Icon as={TiUserAddOutline} />}>
                        register
                    </Button>
                </NextLink>
            </>
        )
    } else {
        accountLinks = (
            <Flex align='center'>
                <Box mr={2}>{data.me.email}</Box>
                <Button onClick={() => handleLogout()} variant='ghost' leftIcon={<Icon as={BiLogOut} />}>
                    Logout
                </Button>
            </Flex>
        )
    }

    return (
        <Flex maxWidth='800px' p={4} align='center' m={'auto'}>
            <Box mr={'auto'}>
                <NextLink href='/'>
                    <Button as='button' variant='ghost' leftIcon={<Icon as={BiHomeSmile} />} mr={4}>
                        Kindle Notes
                    </Button>
                </NextLink>
                {data?.me ? (
                    <NextLink href='/books/add-book'>
                        <Button variant='ghost' size='sm' mr={4} leftIcon={<AddIcon />}>
                            add book
                        </Button>
                    </NextLink>
                ) : null}
                {data?.me ? (
                    <NextLink href='/books/my-books'>
                        <Button variant='ghost' size='sm' mr={4} leftIcon={<HamburgerIcon />}>
                            my books
                        </Button>
                    </NextLink>
                ) : null}
            </Box>
            <IconButton
                onClick={toggleColorMode}
                aria-label='Dark Mode'
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}></IconButton>
            <Box ml={'auto'}>{accountLinks}</Box>
        </Flex>
    )
}
