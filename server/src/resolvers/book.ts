import { Book } from '../entities/Book'
import { Arg, Ctx, Field, Mutation, ObjectType, Query, Resolver, UseMiddleware } from 'type-graphql'
import { MyContext } from 'src/types/types'
import { User } from '../entities/User'
import { SectionHighlight } from '../entities/SectionHighlight'
import { BookSection } from '../entities/BookSection'
import { BookInput } from '../types/resolverTypes'
import { isAuth } from '../middleware/isAuth'
import { getConnection } from 'typeorm'

@ObjectType()
class AddBookResponse {
    @Field({ nullable: true })
    error?: string

    @Field(() => Book, { nullable: true })
    book?: Book
}

@Resolver()
export class BookResolver {
    @Mutation(() => AddBookResponse)
    @UseMiddleware(isAuth)
    async saveBook(@Arg('book', () => BookInput) book: Book, @Ctx() { req }: MyContext): Promise<AddBookResponse> {
        const userId = req.session.userId
        const user = await User.findOne(userId)

        if (!user) {
            return {
                error: 'User does not exist, please create an account.',
            }
        }

        // connect new book to user
        const newBook = new Book()
        newBook.author = book.author
        newBook.title = book.title
        // newBook.owner = user
        newBook.sections = []

        const highlights: SectionHighlight[] = []
        const sections: BookSection[] = []

        const bookSections = book.sections
        bookSections.forEach((section) => {
            let tempSection = new BookSection()
            tempSection.sectionHeading = section.sectionHeading
            tempSection.sectionNotes = []
            newBook.sections.push(tempSection)
            section.sectionNotes.forEach((highlight) => {
                let tempHighlight = new SectionHighlight()
                tempHighlight.note = highlight.note
                tempSection.sectionNotes.push(tempHighlight)
                highlights.push({ ...tempHighlight } as SectionHighlight)
            })
            sections.push({ ...tempSection } as BookSection)
        })

        // entities I want to save to DB
        if (!user.books) {
            user.books = [newBook]
        } else {
            user.books = [...user.books, newBook]
        }

        try {
            highlights.forEach(async (highlight) => {
                await SectionHighlight.create(highlight).save()
            })
            sections.forEach(async (section) => {
                await BookSection.create(section).save()
            })
            await Book.create(newBook).save()
        } catch (err) {
            return {
                error: err,
            }
        }

        console.log(user)
        await User.save(user)

        return {
            book: newBook,
        }
    }

    @Query(() => [Book])
    @UseMiddleware(isAuth)
    async getUserBooks(@Ctx() { req }: MyContext): Promise<Book[] | null> {
        const userId = req.session.userId
        const user = await User.find()
        // const user = await getConnection()
        //     .getRepository(User)
        //     .createQueryBuilder('users')
        //     .where(userId)
        //     .leftJoinAndSelect('users.books', 'books')
        //     .getMany()

        console.log(user)

        const books = await Book.find()
        console.log(books)

        if (!user) {
            return null
        }

        // console.log(user)
        // if (!userBooks) {
        //     return []
        // }

        return []
    }
}
