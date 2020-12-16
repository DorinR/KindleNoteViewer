import React from 'react'
import { FormShaper } from '../components/FormShaper'
import { NavBar } from '../components/NavBar'
import { Text } from '@chakra-ui/react'
import Image from 'next/image'
import { Center } from '@chakra-ui/react'

const Index = () => (
    <div>
        <NavBar />
        <FormShaper>
            <Text fontSize='5xl' mb={4}>
                how to import books
            </Text>

            {/* <Image src={require('../static/kindle_app_export.gif')}> </Image> */}
            {/* <img src='/static/kindle_app_export.gif' /> */}

            <Text fontSize='xl' mb={4}>
                <strong>Step 1: </strong>export from kindle app
            </Text>

            <Center mb={10}>
                <Image src='/kindleExport.gif' alt='kindle_export_how_to' width='256' height='554' />
            </Center>

            <Text fontSize='xl' mb={4}>
                <strong>Step 2: </strong>import into app
            </Text>

            <Center>
                <Image src='/highlightsImport.gif' alt='highlights_import_how_to' width='553' height='531' />
            </Center>
        </FormShaper>
    </div>
)

export default Index
