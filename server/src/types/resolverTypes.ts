import { User } from '../entities/User'
import { Field, InputType, ObjectType } from 'type-graphql'
import { Post } from '../entities/Post'

@InputType()
export class RegisterInput {
    @Field()
    username: string

    @Field()
    email: string

    @Field()
    password: string
}

@InputType()
export class LoginInput {
    @Field()
    usernameOrEmail: string

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
export class CreatePostResponse {
    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[]

    @Field(() => Post, { nullable: true })
    post?: Post
}

@ObjectType()
export class ChangePasswordResponse {
    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[]
}
