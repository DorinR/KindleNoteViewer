import React from 'react'
import { Form, Formik } from 'formik'
import { Box, Button } from '@chakra-ui/react'
import { Wrapper } from '../components/Wrapper'
import { InputField } from '../components/InputField'
import { useLoginMutation } from '../generated/graphql'
import { toErrorMap } from '../utils/toErrorMap'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { NavBar } from '../components/NavBar'
import { FormShaper } from '../components/FormShaper'

export const Login: React.FC = ({}) => {
    const router = useRouter()
    const [, login] = useLoginMutation()

    return (
        <>
            <NavBar />
            <FormShaper>
                <Wrapper variant='regular'>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={async (values, { setErrors }) => {
                            const response = await login({ options: values })
                            if (response.data?.login.errors) {
                                setErrors(toErrorMap(response.data.login.errors))
                            } else if (response.data?.login.user) {
                                router.push('/')
                            }
                        }}>
                        {({ isSubmitting }) => (
                            <Form>
                                <InputField name='email' label='email' placeholder='email' />
                                <Box mt={4}>
                                    <InputField
                                        name='password'
                                        label='password'
                                        placeholder='password'
                                        type='password'
                                    />
                                </Box>
                                <Button mt={4} isLoading={isSubmitting} type='submit'>
                                    login
                                </Button>
                                <NextLink href='/reset-password'>
                                    <Button ml={4} mt={4} variant='link'>
                                        forgot password
                                    </Button>
                                </NextLink>
                            </Form>
                        )}
                    </Formik>
                </Wrapper>
            </FormShaper>
        </>
    )
}

export default Login
