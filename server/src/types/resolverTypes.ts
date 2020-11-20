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

@InputType()
export class HighlightInput {
    @Field()
    note: string
}
@InputType()
export class SectionInput {
    @Field()
    sectionHeading: string

    @Field(() => [HighlightInput])
    sectionNotes: HighlightInput[]
}

@InputType()
export class BookInput {
    @Field()
    title: string

    @Field()
    author: string

    @Field(() => [SectionInput])
    sections: SectionInput[]
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
