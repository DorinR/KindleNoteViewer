import React from 'react'
import { FormShaper } from '../components/FormShaper'
import { NavBar } from '../components/NavBar'
import { Text, Box, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import { Center } from '@chakra-ui/react'

const Index = () => (
    <div>
        <NavBar />
        <FormShaper>
            <Text fontSize='5xl' mb={4}>
                how to import books
            </Text>
            <Box
                borderWidth='2px'
                padding='15px'
                borderRadius='xl'
                mb={6}
                backgroundColor={useColorModeValue('gray.200', 'gray.700')}>
                <Text fontSize='3xl' mb={4}>
                    <strong>Part 1: </strong>exporting highlights from Kindle app
                </Text>
                <Text fontSize='2xl' mb={4}>
                    ➡️ Steps
                </Text>
                <Text fontSize='m' mb={1}>
                    <strong>1. </strong>Open Kindle App on iPhone or Android device
                </Text>
                <Text fontSize='m' mb={1}>
                    <strong>2. </strong>Open a book
                </Text>
                <Text fontSize='m' mb={1}>
                    <strong>3. </strong>Open highlights for that book
                </Text>
                <Text fontSize='m' mb={4}>
                    <strong>4. </strong>Click share button and email the highlights to yourself
                </Text>
                <Text fontSize='2xl' mb={4}>
                    ➡️ What it should look like
                </Text>
                <Center mb={1}>
                    <Image
                        src='/kindleExport.gif'
                        alt='kindle_export_how_to'
                        width='256'
                        height='554'
                        unoptimized={true}
                    />
                </Center>
            </Box>

            <Box
                borderWidth='2px'
                padding='15px'
                borderRadius='xl'
                mb={4}
                backgroundColor={useColorModeValue('gray.200', 'gray.700')}>
                <Text fontSize='3xl' mb={4}>
                    <strong>Part 2: </strong>Importing the highlights into Reading Notes
                </Text>
                <Text fontSize='2xl' mb={4}>
                    ➡️ Steps
                </Text>
                <Text fontSize='m' mb={1}>
                    <strong>1. </strong>Log into your ReadingNotes account
                </Text>
                <Text fontSize='m' mb={1}>
                    <strong>2. </strong>Click on "+ add book" at the top of the page
                </Text>
                <Text fontSize='m' mb={1}>
                    <strong>3. </strong>Drag and drop the highlights file you emailed to yourself
                </Text>
                <Text fontSize='m' mb={4}>
                    <strong>4. </strong>Success popup will appear once highlights have been imported.
                </Text>
                <Text fontSize='2xl' mb={4}>
                    ➡️ What it should look like
                </Text>
                <Center>
                    <Image
                        src='/highlightsImport.gif'
                        alt='highlights_import_how_to'
                        width='553'
                        height='531'
                        unoptimized={true}
                    />
                </Center>
            </Box>
        </FormShaper>
    </div>
)

export default Index
