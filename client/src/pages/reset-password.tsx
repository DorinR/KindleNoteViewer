import React from 'react'
import { Form, Formik } from 'formik'
import { Button } from '@chakra-ui/react'
import { Wrapper } from '../components/Wrapper'
import { InputField } from '../components/InputField'
import { useRouter } from 'next/router'
import { useResetPasswordMutation } from '../generated/graphql'

interface ResetPasswordProps {}

export const ResetPassword: React.FC<ResetPasswordProps> = ({}) => {
    const router = useRouter()
    const [, resetPassword] = useResetPasswordMutation()

    return (
        <>
            <Wrapper variant='regular'>
                <Formik
                    initialValues={{ email: '' }}
                    onSubmit={async (values, { setErrors }) => {
                        await resetPassword({ email: values.email })
                        setErrors({ email: 'If the email exists, an email was sent.' })
                        setTimeout(() => {
                            router.push('/')
                        }, 2000)
                    }}>
                    {({ isSubmitting }) => (
                        <Form>
                            <InputField name='email' label='Email' placeholder='email' />
                            <Button mt={4} isLoading={isSubmitting} type='submit'>
                                reset password
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Wrapper>
        </>
    )
}

export default ResetPassword
