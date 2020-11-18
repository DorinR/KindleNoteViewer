import { User } from '../entities/User'
import { Field, InputType, ObjectType } from 'type-graphql'

@InputType()
export class RegisterInput {
    @Field()
    email: string

    @Field()
    password: string
}

@InputType()
export class LoginInput {
    @Field()
    email: string

    @Field()
    password: string
}

@ObjectType()
export class FieldError {
    @Field()
    field: string

    @Field()
    message: string
}

@ObjectType()
export class UserResponse {
    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[]

    @Field(() => User, { nullable: true })
    user?: User
}

@ObjectType()
export class ChangePasswordResponse {
    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[]
}
