import React from 'react'
import { Spinner, Center, Text, Button } from '@chakra-ui/react'
import { useGetIntId } from '../../../utils/getId'
import { useGetSectionHighlightsQuery } from '../../../generated/graphql'
import genHeading from '../../../components/component-gen/genHeading'
import { useRouter } from 'next/router'
import { ArrowBackIcon } from '@chakra-ui/icons'

const MyBooks: React.FC = ({}) => {
    const router = useRouter()
    const intId = useGetIntId()
    const [{ data, fetching }] = useGetSectionHighlightsQuery({ variables: { sectionId: intId.toString() } })
    let sectionNotes = null

    if (!fetching) {
        if (data?.getSectionHighlights.sectionHighlights) {
            const highlights: any = []
            let key = 1
            data?.getSectionHighlights.sectionHighlights.forEach((highlight) => {
                highlights.push(genHeading({ text: highlight.note, key: key }))
                key += 1
            })
            sectionNotes = highlights
        }
    }

    return (
        <>
            <Text fontSize='5xl' mb={4}>
                highlights
            </Text>
            <Button mb={5} leftIcon={<ArrowBackIcon />} onClick={() => router.back()}>
                all sections
            </Button>
            {fetching ? (
                <Center>
                    <Spinner size='xl' mt={10} />
                </Center>
            ) : (
                sectionNotes
            )}
        </>
    )
}

export default MyBooks
