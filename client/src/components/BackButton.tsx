import React from 'react'
import { Button } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

interface BackButtonProps {
    href: string
    linkText: string
}

const BackButton: React.FC<BackButtonProps> = ({ href, linkText }) => {
    return (
        <NextLink href={href}>
            <Button mb={5} leftIcon={<ArrowBackIcon />}>
                {linkText}
            </Button>
        </NextLink>
    )
}

export default BackButton
