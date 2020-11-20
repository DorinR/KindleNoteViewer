import React, { useEffect, useState } from 'react'
import { FormShaper } from '../../components/FormShaper'
import { NavBar } from '../../components/NavBar'
import { Text } from '@chakra-ui/react'
// import FileUploader from '../../components/FileUploader'
// import extractBookHighlights from '../../utils/htmlDomParser'
// import { BookHighlights } from '../../utils/types/highlightParser'
// import { useSaveBookMutation } from '../../generated/graphql'

const AddBook: React.FC = ({}) => {
    // const [rawHtml, setRawHtml] = useState('')
    // const [, saveBook] = useSaveBookMutation()

    // useEffect(async () => {
    //     if (rawHtml) {
    //         const book: BookHighlights = extractBookHighlights(rawHtml)
    //         const response = saveBook({ book })
    //         console.log('saveBook response')
    //         console.log(response)
    //     }
    // }, [rawHtml])

    return (
        <>
            <NavBar />
            <FormShaper>
                <Text fontSize='5xl'>Add Book</Text>
                {/* <FileUploader setRawHtml={setRawHtml} /> */}
            </FormShaper>
        </>
    )
}

export default AddBook
