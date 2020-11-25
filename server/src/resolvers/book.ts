import { Book } from '../entities/Book'
import { Arg, Ctx, Field, Mutation, ObjectType, Query, Resolver, UseMiddleware } from 'type-graphql'
import { MyContext } from 'src/types/types'
import { User } from '../entities/User'
import { SectionHighlight } from '../entities/SectionHighlight'
import { BookSection } from '../entities/BookSection'
import { BookInput } from '../types/resolverTypes'
import { isAuth } from '../middleware/isAuth'

@ObjectType()
class AddBookResponse {
    @Field({ nullable: true })
    error?: string

    @Field(() => Book, { nullable: true })
    book?: Book
}

@ObjectType()
class GetUserBooksResponse {
    @Field({ nullable: true })
    error?: string

    @Field(() => [Book], { nullable: true })
    books?: Book[]
}

@ObjectType()
class Note {
    @Field({ nullable: true })
    note: string

    constructor(note: string) {
        this.note = note
    }
}

@ObjectType()
class Section {
    @Field({ nullable: true })
    sectionHeading: string

    @Field(() => [Note], { nullable: true })
    sectionNotes: Note[]

    constructor(sectionHeading: string) {
        this.sectionHeading = sectionHeading
        this.sectionNotes = []
    }
}

@ObjectType()
class BookHighlights {
    @Field({ nullable: true })
    title: string

    @Field({ nullable: true })
    author: string

    @Field(() => [Section], { nullable: true })
    sections: Section[]

    constructor() {
        this.title = ''
        this.author = ''
        this.sections = []
    }
}

@ObjectType()
class GetUserBookResponse {
    @Field({ nullable: true })
    error?: string

    @Field(() => BookHighlights, { nullable: true })
    book?: BookHighlights
}

@Resolver()
export class BookResolver {
    @Mutation(() => AddBookResponse)
    @UseMiddleware(isAuth)
    async saveBook(
        @Arg('book', () => BookInput) book: BookHighlights,
        @Ctx() { req }: MyContext
    ): Promise<AddBookResponse> {
        const userId = req.session.userId
        const user = await User.findOne(userId)

        if (!user) {
            return {
                error: 'User does not exist, please create an account.',
            }
        }

        // create book, set owner to current user
        const newBook = new Book()
        newBook.author = book.author
        newBook.title = book.title
        newBook.owner = userId
        const newlySavedBookId = (await Book.save(newBook)).id

        book.sections.forEach(async (section) => {
            let tempSection = new BookSection()
            tempSection.owner = userId
            tempSection.book = newlySavedBookId.toString()
            tempSection.sectionHeading = section.sectionHeading
            let tempSectionId = (await BookSection.save(tempSection)).id
            section.sectionNotes.forEach(async (highlight) => {
                let tempHighlight = new SectionHighlight()
                tempHighlight.owner = userId
                tempHighlight.section = tempSectionId.toString()
                tempHighlight.note = highlight.note
                await SectionHighlight.save(tempHighlight)
            })
        })

        return {
            book: newBook,
        }
    }

    @Query(() => GetUserBooksResponse)
    @UseMiddleware(isAuth)
    async getUserBooks(@Ctx() { req }: MyContext): Promise<GetUserBooksResponse> {
        const userId = req.session.userId
        const user = await User.findOne(userId)

        if (!user) {
            {
                error: 'user not found, please register new user.'
            }
        }

        const userBooks = await Book.find({ where: { owner: userId } })

        return {
            books: userBooks,
        }
    }

    @Query(() => GetUserBookResponse)
    @UseMiddleware(isAuth)
    async getUserBook(@Arg('id') id: string, @Ctx() { req }: MyContext): Promise<GetUserBookResponse> {
        const totalBook = new BookHighlights()
        const userId = req.session.userId
        const user = await User.findOne(userId)

        if (!user) {
            return {
                error: 'user not found, please register new user.',
            }
        }

        const book = await Book.findOne({ where: { owner: userId, id } })
        if (!book) {
            return {
                error: `"${id}" does not exist in this user's book library`,
            }
        } else {
            totalBook.title = book.title
            totalBook.author = book.author
        }

        const sections = await BookSection.find({ where: { owner: userId, book: book.id.toString() } })
        const totalBookSections: Section[] = []
        for (const section of sections) {
            let tempSection = new Section(section.sectionHeading)
            let tempHighlights = await SectionHighlight.find({ where: { owner: userId, section: section.id } })
            tempHighlights.forEach((highlight) => {
                let tempHighlight = new Note(highlight.note)
                tempSection.sectionNotes.push(tempHighlight)
            })
            totalBookSections.push(tempSection)
        }

        totalBook.sections = totalBookSections

        return {
            book: totalBook,
        }
    }
}
