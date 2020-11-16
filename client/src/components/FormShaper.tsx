import { Box } from '@chakra-ui/react'
import React from 'react'

interface FormShaperProps {}

export const FormShaper: React.FC<FormShaperProps> = ({ children }) => {
    return (
        <Box maxWidth='450px' p={4} m={'auto'}>
            {children}
        </Box>
    )
}
