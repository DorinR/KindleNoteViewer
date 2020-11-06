import { User } from '../entities/User'
import { MyContext } from 'src/types/types'
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import { Post } from '../entities/Post'
import { CreatePostResponse } from '../types/resolverTypes'

@Resolver()
export class PostResolver {
    @Query(() => [Post])
    posts(): Promise<Post[]> {
        return Post.find()
    }

    @Query(() => Post, { nullable: true })
    post(@Arg('id') id: number): Promise<Post | undefined> {
        return Post.findOne(id)
    }

    @Mutation(() => CreatePostResponse)
    async createPost(
        @Arg('title') title: string,
        @Arg('content') content: string,
        @Ctx() { req }: MyContext
    ): Promise<CreatePostResponse> {
        if (title.length < 3) {
            return {
                errors: [
                    {
                        field: 'title',
                        message: 'title should be at least 3 characters long.',
                    },
                ],
            }
        }
        if (content.length < 1) {
            return {
                errors: [
                    {
                        field: 'content',
                        message: 'content cannot be empty',
                    },
                ],
            }
        }

        if (!req.session.userId) {
            throw new Error('User not authenticated')
        }
        const user = await User.findOne(req.session.userId)
        const post = await Post.create({ title, content, creatorId: req.session.userId, creator: user }).save()
        return { post }
    }

    @Mutation(() => Post)
    async updatePost(
        @Arg('id') id: number,
        @Arg('title', () => String, { nullable: true }) title: string,
        @Arg('content', () => String, { nullable: true }) content: string
    ): Promise<Post | null> {
        const post = await Post.findOne(id)
        if (!post) {
            return null
        }
        if (typeof title !== 'undefined') {
            await Post.update({ id }, { title, content })
        }
        return post
    }

    @Mutation(() => Boolean)
    async deletePost(@Arg('id') id: number): Promise<boolean> {
        await Post.delete(id)
        return true
    }
}
