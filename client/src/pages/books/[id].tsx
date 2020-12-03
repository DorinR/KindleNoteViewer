import React from 'react'
import { FormShaper } from '../../components/FormShaper'
import { NavBar } from '../../components/NavBar'
import { Accordion, Spinner, Center } from '@chakra-ui/react'
import { useGetIntId } from '../../utils/getId'
import { useGetUserBookQuery } from '../../generated/graphql'
import genBook from '../../components/component-gen/genBook'
import BookHeader from '../../components/book/bookHeader'

const MyBooks: React.FC = ({}) => {
    const intId = useGetIntId()
    const [{ data, fetching }] = useGetUserBookQuery({ variables: { id: intId.toString() } })
    let bookHighlights = null

    if (!fetching) {
        if (data?.getUserBook.book) {
            bookHighlights = genBook(data?.getUserBook.book)
        }
    }

    return (
        <>
            <NavBar />
            <FormShaper>
                <BookHeader
                    title={data?.getUserBook.book?.title}
                    author={data?.getUserBook.book?.author}
                    isLoading={fetching}
                />
                {fetching ? (
                    <Center>
                        <Spinner size='xl' mt={10} />
                    </Center>
                ) : (
                    <Accordion allowMultiple>{bookHighlights}</Accordion>
                )}
            </FormShaper>
        </>
    )
}

export default MyBooks
