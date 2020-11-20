import { Book } from '../entities/Book'
import { Arg, Ctx, Field, Mutation, ObjectType, Resolver } from 'type-graphql'
import { MyContext } from 'src/types/types'
import { User } from '../entities/User'
import { SectionHighlight } from '../entities/SectionHighlight'
import { BookSection } from '../entities/BookSection'
import { BookInput } from '../types/resolverTypes'

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
    async saveBook(@Arg('book', () => BookInput) book: Book, @Ctx() { req }: MyContext): Promise<AddBookResponse> {
        const userId = req.session.userId

        if (!userId) {
            return {
                error: 'User must be logged in, with cookies enabled in order to add a new book.',
            }
        }
        const user = await User.findOne(userId)

        if (!user) {
            return {
                error: 'User does not exist, please create an account.',
            }
        }
        // connect new book to user
        const newBook = new Book()
        newBook.owner = user
        newBook.author = book.author
        newBook.title = book.title

        const highlights: SectionHighlight[] = []
        const sections: BookSection[] = []

        const bookSections = book.sections
        bookSections.forEach((section) => {
            let tempSection = new BookSection()
            tempSection.sectionHeading = section.sectionHeading
            tempSection.book = newBook
            section.sectionNotes.forEach((highlight) => {
                let tempHighlight = new SectionHighlight()
                tempHighlight.note = highlight.note
                tempHighlight.bookSection = tempSection
                highlights.push({ ...tempHighlight } as SectionHighlight)
            })
            sections.push({ ...tempSection } as BookSection)
        })

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

        return {
            book: newBook,
        }
    }
}
