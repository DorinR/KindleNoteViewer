import { FieldError, RegisterInput } from "src/types/userResolverTypes"

export const validateRegistrationData = (options: RegisterInput):FieldError[]|null  => {
    if (!options.email.includes('@')) {
        return [
            {
                field: 'email',
                message: 'please enter a valid email'
            }
        ]
    }
    
    if (options.username.includes('@')) {
        return [
            {
                field: 'username',
                message: 'username cannot include an @'
        }
        ]
    }
    
    if (options.username.length <= 2) {
        return [
                {
                    field: 'username',
                    message: 'username length must be greater than 2',
                },
            ]
        }   
    
    if (options.password.length <= 2) {
        return [
                {
                    field: 'password',
                    message: 'password length must be greater than 2',
                }
            ]
    }

    return null
}