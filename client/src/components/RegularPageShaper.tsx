import { Flex } from '@chakra-ui/core'
import React from 'react'

interface RegularPageShaperProps {}

const RegularPageShaper: React.FC<RegularPageShaperProps> = ({ children }) => {
    return (
        <Flex maxWidth='800' align='center' m={'auto'}>
            {children}
        </Flex>
    )
}

export default RegularPageShaper
