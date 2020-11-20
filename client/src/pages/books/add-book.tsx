import React, { useEffect, useState } from 'react'
import { FormShaper } from '../../components/FormShaper'
import { NavBar } from '../../components/NavBar'
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
            router.push('/')
        }
    }, [rawHtml])

    const saveUserBook = async (book: BookInput) => {
        const response = await saveBook({ book })
        console.log('saveBook response')
        console.log(response)
        if (response.data?.saveBook.error) {
            swal('Something went wrong', response.data?.saveBook.error, 'error')
        } else {
            swal(
                'Book Saved Successfully',
                `${response.data?.saveBook.book?.title} by ${response.data?.saveBook.book?.author}`,
                'success'
            )
        }
        return response
    }

    return (
        <>
            <NavBar />
            <FormShaper>
                <Text fontSize='5xl'>Add Book</Text>
                <FileUploader setRawHtml={setRawHtml} />
            </FormShaper>
        </>
    )
}

export default AddBook
