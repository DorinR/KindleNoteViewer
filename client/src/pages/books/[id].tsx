import React from 'react'
import { FormShaper } from '../../components/FormShaper'
import { NavBar } from '../../components/NavBar'
import { Text } from '@chakra-ui/react'
import { useGetIntId } from '../../utils/getId'

const MyBooks: React.FC = ({}) => {
    const intId = useGetIntId()

    return (
        <>
            <NavBar />
            <FormShaper>
                <Text fontSize='5xl'>Book with id: {intId}</Text>
            </FormShaper>
        </>
    )
}

export default MyBooks
