import { Flex } from '@chakra-ui/react'
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
