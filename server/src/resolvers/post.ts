import { User } from '../entities/User'
import { MyContext } from 'src/types/types'
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import { Post } from '../entities/Post'

@Resolver()
export class PostResolver {
    @Query(() => [Post])
    posts(@Ctx() { em }: MyContext): Promise<Post[]> {
        return em.find(Post, {})
    }

    @Query(() => Post, { nullable: true })
    post(@Arg('id') id: number, @Ctx() { em }: MyContext): Promise<Post | null> {
        return em.findOne(Post, { id })
    }

    @Mutation(() => Post)
    async createPost(
        @Arg('title') title: string,
        @Arg('content') content: string,
        @Ctx() { em, req }: MyContext
    ): Promise<Post> {
        const userId = req.session.userId
        const user = await em.findOne(User, { id: userId })
        const post = em.create(Post, { title, content, createdBy: user?.username })
        await em.persistAndFlush(post)
        return post
    }

    @Mutation(() => Post)
    async updatePost(
        @Arg('id') id: number,
        @Arg('title', () => String, { nullable: true }) title: string,
        @Arg('content', () => String, { nullable: true }) content: string,
        @Ctx() { em }: MyContext
    ): Promise<Post | null> {
        const post = await em.findOne(Post, { id })
        if (!post) {
            return null
        }
        if (typeof title !== 'undefined') {
            post.title = title
            post.content = content
            await em.persistAndFlush
        }
        return post
    }

    @Mutation(() => Boolean)
    async deletePost(@Arg('id') id: number, @Ctx() { em }: MyContext): Promise<boolean> {
        await em.nativeDelete(Post, { id })
        return true
    }
}
