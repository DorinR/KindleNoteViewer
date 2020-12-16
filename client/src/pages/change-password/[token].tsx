import React from 'react'
import { useRouter } from 'next/router'
import { useChangePasswordMutation } from '../../generated/graphql'
import { Button } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import { InputField } from '../../components/InputField'
import { Wrapper } from '../../components/Wrapper'
import { toErrorMap } from '../../utils/toErrorMap'

interface ChangePasswordProps {}

export const changePassword: React.FC<ChangePasswordProps> = () => {
    const router = useRouter()
    const [, changePassword] = useChangePasswordMutation()
    const { token } = router.query
    const validToken = typeof token === 'string' ? token : 'fallback-token'

    return (
        <Wrapper variant='regular'>
            <Formik
                initialValues={{ password: '' }}
                onSubmit={async (values, { setErrors }) => {
                    const response = await changePassword({ token: validToken, password: values.password })
                    if (response.data?.changePassword.errors?.length) {
                        setErrors(toErrorMap(response.data.changePassword.errors))
                    } else {
                        alert('Password changed successfully!')
                        setTimeout(() => {
                            router.push('/books/my-books')
                        }, 1000)
                    }
                }}>
                {({ isSubmitting }) => (
                    <Form>
                        <InputField name='password' label='New Password' placeholder='new password' type='password' />
                        <Button mt={4} isLoading={isSubmitting} type='submit'>
                            Change Password
                        </Button>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    )
}

export default changePassword
