import React, { useState } from 'react'
import { FormShaper } from '../../components/FormShaper'
import { NavBar } from '../../components/NavBar'
import { Text } from '@chakra-ui/react'
import FileUploader from '../../components/FileUploader'
// import extractBookHighlights from '../../utils/htmlDomParser'

const AddBook: React.FC = ({}) => {
    const [rawHtml, setRawHtml] = useState('')

    if (rawHtml) {
        console.log('HTML string uploaded:')
        console.log(rawHtml)
        // const bookHighlights = extractBookHighlights(rawHtml)
        // saveToDb(bookHighlights)\
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
