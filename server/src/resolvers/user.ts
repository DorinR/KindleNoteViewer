import { User } from '../entities/User'
import { MyContext } from '../types/types'
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import argon2 from 'argon2'
import { EntityManager } from '@mikro-orm/postgresql'
import { COOKIE_NAME } from '../constants'
import { LoginInput, RegisterInput, UserResponse } from '../types/userResolverTypes'
import { validateRegistrationData } from '../utils/registerValidation'

@Resolver()
export class UserResolver {
    @Query(() => User)
    async me(@Ctx() { req, em }: MyContext): Promise<User | null> {
        if (!req.session.userId) {
            return null
        }
        const user = await em.findOne(User, { id: req.session.userId })
        return user
    }

    @Mutation(() => UserResponse)
    async register(
        @Arg('options') options: RegisterInput,
        @Ctx() { req, em }: MyContext
    ): Promise<UserResponse> {
        const errors = validateRegistrationData(options)
        if (errors) {
            return {errors}
        }
        const hashedPassword = await argon2.hash(options.password)
        let user
        try {
            const result = await (em as EntityManager)
                .createQueryBuilder(User)
                .getKnexQuery()
                .insert({
                    username: options.username,
                    email: options.email,
                    password: hashedPassword,
                    created_at: new Date(),
                    updated_at: new Date(),
                })
                .returning('*')
            user = result[0]
        } catch (err) {
            if (err.detail.includes('already exists')) {
                return {
                    errors: [
                        {
                            field: 'username',
                            message: 'username already exists',
                        },
                    ],
                }
            }
        }

        req.session.userId = user.id

        return {
            user,
        }
    }

    @Mutation(() => UserResponse)
    async login(@Arg('options') options: LoginInput, @Ctx() { em, req }: MyContext): Promise<UserResponse> {
        let user
        if (options.usernameOrEmail.includes('@')) {
            user = await em.findOne(User, {email: options.usernameOrEmail})
        } else {
            user = await em.findOne(User, {username: options.usernameOrEmail})
        }
    
        if (!user) {
            return {
                errors: [
                    {
                        field: 'usernameOrEmail',
                        message: "that user doesn't exist",
                    },
                ],
            }
        }
        const valid = await argon2.verify(user.password, options.password)
        if (!valid) {
            return {
                errors: [
                    {
                        field: 'password',
                        message: 'incorrect password',
                    },
                ],
            }
        }

        req.session.userId = user.id

        return {
            user,
        }
    }

    @Query(() => User)
    async getUser(@Arg('username') username: string, @Ctx() { em }: MyContext): Promise<User | null> {
        const user = await em.findOne(User, { username: username })
        if (!user) {
            return null
        }
        return user
    }

    @Mutation(() => Boolean)
    logout(@Ctx() { req, res }: MyContext) {
        return new Promise((resolve) => {
            req.session.destroy((err) => {
                if (err) {
                    resolve(false)
                }
                res.clearCookie(COOKIE_NAME)
                resolve(true)
            })
        })
    }
}
