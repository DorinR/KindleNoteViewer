import React from 'react'
import { FormShaper } from '../../components/FormShaper'
import { NavBar } from '../../components/NavBar'
import { Spinner, Center } from '@chakra-ui/react'
import { useGetIntId } from '../../utils/getId'
import { useGetBookDetailsQuery } from '../../generated/graphql'
import BookHeader from '../../components/book/bookHeader'
import genHeading from '../../components/component-gen/genHeading'

const MyBooks: React.FC = ({}) => {
    const intId = useGetIntId()
    const [{ data, fetching }] = useGetBookDetailsQuery({ variables: { bookId: intId.toString() } })
    let bookHeadings = null

    if (!fetching) {
        if (data?.getBookHeadings.bookHeadings) {
            const headings: JSX.Element[] = []
            let key = 1
            data?.getBookHeadings.bookHeadings?.forEach((bookHeading) => {
                console.log(bookHeading)
                headings.push(genHeading(bookHeading.id.toString(), bookHeading.sectionHeading, key))
                key += 1
            })
            bookHeadings = headings
        }
    }

    return (
        <>
            <NavBar />
            <FormShaper>
                <BookHeader
                    title={data?.getBookDetails.bookDetails?.title}
                    author={data?.getBookDetails.bookDetails?.author}
                    isLoading={fetching}
                />
                {fetching ? (
                    <Center>
                        <Spinner size='xl' mt={10} />
                    </Center>
                ) : (
                    bookHeadings
                )}
            </FormShaper>
        </>
    )
}

export default MyBooks
