import { Box, Button } from '@chakra-ui/core'
import { Formik, Form } from 'formik'
import { useRouter } from 'next/router'
import React from 'react'
import { FormShaper } from '../../components/FormShaper'
import { InputField } from '../../components/InputField'
import { NavBar } from '../../components/NavBar'
import { Wrapper } from '../../components/Wrapper'
import { useCreatePostMutation } from '../../generated/graphql'
import { toErrorMap } from '../../utils/toErrorMap'
import NextLink from 'next/link'

interface createPostProps {}

const CreatePost: React.FC<createPostProps> = ({}) => {
    const router = useRouter()
    const [, createPost] = useCreatePostMutation()

    return (
        <>
            <NavBar />
            <FormShaper>
                <Wrapper variant='regular'>
                    <Formik
                        initialValues={{ title: '', content: '' }}
                        onSubmit={async (values, { setErrors }) => {
                            const response = await createPost(values)
                            if (response.data?.createPost.errors) {
                                setErrors(toErrorMap(response.data.createPost.errors))
                            } else if (response.data?.createPost.post) {
                                router.push('/')
                            }
                        }}>
                        {({ isSubmitting }) => (
                            <Form>
                                <InputField name='title' label='Title' placeholder='post title' />
                                <Box mt={4}>
                                    <InputField name='content' label='Content' placeholder='Post Content' />
                                </Box>
                                <NextLink href='/'>
                                    <Button mr={4} mt={4} variantColor='red' variant='link'>
                                        cancel
                                    </Button>
                                </NextLink>
                                <Button mt={4} isLoading={isSubmitting} variantColor='teal' type='submit'>
                                    create post
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Wrapper>
            </FormShaper>
        </>
    )
}

export default CreatePost
