import React from 'react'
import { FormShaper } from '../../components/FormShaper'
import { NavBar } from '../../components/NavBar'
import { Accordion, Text } from '@chakra-ui/react'
import { useGetIntId } from '../../utils/getId'
import { useGetUserBookQuery } from '../../generated/graphql'
import genBook from '../../components/component-gen/genBook'

const MyBooks: React.FC = ({}) => {
    const intId = useGetIntId()
    const [{ data, fetching }] = useGetUserBookQuery({ variables: { id: intId.toString() } })
    let bookHighlights = null

    if (fetching) {
        // do nothing maybe add spinner
    } else {
        if (data?.getUserBook.book) {
            bookHighlights = genBook(data?.getUserBook.book)
        }
    }

    return (
        <>
            <NavBar />
            <FormShaper>
                <Text fontSize='5xl'>{data?.getUserBook.book?.title}</Text>
                <Text fontSize='3xl' mb={5}>
                    By: {data?.getUserBook.book?.author}
                </Text>
                <Accordion allowMultiple>{bookHighlights}</Accordion>
            </FormShaper>
        </>
    )
}

export default MyBooks
