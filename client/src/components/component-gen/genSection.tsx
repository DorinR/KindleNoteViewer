import React from 'react'
import { Section, Note } from '../../generated/graphql'
import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, useColorModeValue } from '@chakra-ui/react'

const genSection = (section: Section) => {
    const genNote = (note: Note) => {
        return (
            <AccordionPanel pb={4}>
                <Box layerStyle={'highlightBox' + useColorModeValue('', '_dark')}>
                    <div style={{ marginLeft: '8px', padding: '2px' }}>{note.note}</div>
                </Box>
            </AccordionPanel>
        )
    }

    const notes: JSX.Element[] = []

    if (section.sectionNotes) {
        section.sectionNotes.forEach((note) => {
            if (note.note) {
                if (note.note.length > 3) {
                    notes.push(genNote(note))
                }
            }
        })
    }

    const renderedSection = (
        <AccordionItem>
            <AccordionButton _expanded={{ bg: useColorModeValue('red.300', 'red.500') }}>
                <Box flex='1' textAlign='left'>
                    {section.sectionHeading}
                </Box>
                <AccordionIcon />
            </AccordionButton>
            {notes}
        </AccordionItem>
    )

    return renderedSection
}

export default genSection
