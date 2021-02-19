import React from 'react'
import { Spinner, Center, Text } from '@chakra-ui/react'
import { useGetIntId } from '../../utils/getId'
import { useGetBookDetailsQuery } from '../../generated/graphql'
import genHeading from '../../components/component-gen/genHeading'
import BackButton from '../../components/BackButton'

const MyBooks: React.FC = ({}) => {
    const intId = useGetIntId()
    const [{ data, fetching }] = useGetBookDetailsQuery({ variables: { bookId: intId.toString() } })
    let bookHeadings = null

    if (!fetching) {
        if (data?.getBookHeadings.bookHeadings) {
            const headings: any = []
            let key = 1
            data?.getBookHeadings.bookHeadings?.forEach((bookHeading) => {
                headings.push(genHeading({ id: bookHeading.id.toString(), text: bookHeading.sectionHeading, key: key }))
                key += 1
            })
            bookHeadings = headings
        }
    }

    return (
        <>
            <Text fontSize='5xl' mb={5}>
                sections
            </Text>
            <BackButton href='/books/my-books' linkText='all books' />
            {fetching ? (
                <Center>
                    <Spinner size='xl' mt={10} />
                </Center>
            ) : (
                bookHeadings
            )}
        </>
    )
}

export default MyBooks
