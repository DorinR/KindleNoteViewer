import React from 'react'
import { Form, Formik } from 'formik'
import { Box, Button } from '@chakra-ui/core'
import { Wrapper } from '../components/Wrapper'
import { InputField } from '../components/InputField'
import { useLoginMutation } from '../generated/graphql'
import { toErrorMap } from '../utils/toErrorMap'
import { useRouter } from 'next/router'

interface loginProps {}

export const Login: React.FC<loginProps> = ({}) => {
    const router = useRouter()
    const [, login] = useLoginMutation()

    return (
        <Wrapper variant='regular'>
            <Formik
                initialValues={{ usernameOrEmail: '', password: '' }}
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
                        <InputField name='usernameOrEmail' label='username or email' placeholder='username or email' />
                        <Box mt={4}>
                            <InputField name='password' label='password' placeholder='password' type='password' />
                        </Box>
                        <Button mt={4} isLoading={isSubmitting} variantColor='teal' type='submit'>
                            login
                        </Button>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    )
}

export default Login
