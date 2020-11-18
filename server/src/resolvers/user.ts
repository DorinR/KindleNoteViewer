import { User } from '../entities/User'
import { MyContext } from '../types/types'
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import argon2 from 'argon2'
import { COOKIE_NAME, FORGET_PASSWORD_PREFIX } from '../constants'
import { ChangePasswordResponse, LoginInput, RegisterInput, UserResponse } from '../types/resolverTypes'
import { validateRegistrationData } from '../utils/registerValidation'
import { sendEmail } from '../utils/sendEmail'
import { v4 } from 'uuid'
import { getConnection } from 'typeorm'

@Resolver()
export class UserResolver {
    @Mutation(() => ChangePasswordResponse)
    async changePassword(
        @Arg('token') token: string,
        @Arg('password') password: string,
        @Ctx() { req, redis }: MyContext
    ): Promise<UserResponse> {
        if (password.length < 2) {
            return {
                errors: [
                    {
                        field: 'password',
                        message: 'password is too short',
                    },
                ],
            }
        }

        const key = FORGET_PASSWORD_PREFIX + token
        const userId = await redis.get(key)
        if (!userId) {
            return {
                errors: [
                    {
                        field: 'password',
                        message: 'link expired',
                    },
                ],
            }
        }
        const userIdNum = parseInt(userId)
        const user = await User.findOne(userIdNum)
        if (!user) {
            return {
                errors: [
                    {
                        field: 'password',
                        message: 'this user no longer exists',
                    },
                ],
            }
        }

        const hashedPassword = await argon2.hash(password)
        await User.update({ id: userIdNum }, { password: hashedPassword })

        await redis.del(key)

        // log in user after password change
        req.session.userId = user.id

        return {
            user,
        }
    }

    @Mutation(() => Boolean)
    async resetPassword(@Arg('email') email: string, @Ctx() { redis }: MyContext): Promise<Boolean> {
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return true
        }
        const token = v4()

        await redis.set(FORGET_PASSWORD_PREFIX + token, user.id, 'ex', 1000 * 60 * 60 * 24 * 3) // 3 days

        await sendEmail(
            email,
            `<a href='http://localhost:3000/change-password/${token}'>Click Here to Reset Password.</a>`
        )
        return true
    }

    @Query(() => User, { nullable: true })
    me(@Ctx() { req }: MyContext) {
        if (!req.session.userId) {
            return null
        }
        return User.findOne(req.session.userId)
    }

    @Mutation(() => UserResponse)
    async register(@Arg('options') options: RegisterInput, @Ctx() { req }: MyContext): Promise<UserResponse> {
        const errors = validateRegistrationData(options)
        if (errors) {
            return { errors }
        }
        const hashedPassword = await argon2.hash(options.password)
        let user
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(User)
                .values({
                    email: options.email,
                    password: hashedPassword,
                })
                .returning('*')
                .execute()
            user = result.raw[0]
        } catch (err) {
            if (err.detail.includes('email') && err.detail.includes('already exists')) {
                return {
                    errors: [
                        {
                            field: 'email',
                            message: 'email already exists',
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
    async login(@Arg('options') options: LoginInput, @Ctx() { req }: MyContext): Promise<UserResponse> {
        const user = await User.findOne({ where: { username: options.email } })

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
                        message: 'incorrect email or password',
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
    async getUser(@Arg('email') email: string): Promise<User | null> {
        const user = await User.findOne({ where: { email: email } })
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
