import React, { useEffect, useState } from 'react'
import { Text } from '@chakra-ui/react'
import FileUploader from '../../components/FileUploader'
import extractBookHighlights from '../../utils/htmlDomParser'
import { BookHighlights } from '../../utils/types/highlightParser'
import { BookInput, useSaveBookMutation } from '../../generated/graphql'
import { useRouter } from 'next/router'
import swal from 'sweetalert'

const AddBook: React.FC = ({}) => {
    const [rawHtml, setRawHtml] = useState('')
    const [, saveBook] = useSaveBookMutation()
    const router = useRouter()

    useEffect(() => {
        if (rawHtml) {
            const book: BookHighlights = extractBookHighlights(rawHtml)
            saveUserBook(book)
        }
    }, [rawHtml])

    const saveUserBook = async (book: BookInput) => {
        const response = await saveBook({ book })
        if (response.data?.saveBook.error) {
            swal('Something went wrong', response.data?.saveBook.error, 'error')
        } else {
            swal(
                'Book Saved Successfully',
                `${response.data?.saveBook.book?.title} by ${response.data?.saveBook.book?.author}`,
                'success'
            )
        }
        router.push('/books/my-books/')
        return response
    }

    return (
        <>
            <Text fontSize='5xl'>Add Book</Text>
            <FileUploader setRawHtml={setRawHtml} />
        </>
    )
}

export default AddBook
