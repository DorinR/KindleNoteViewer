import { Book } from '../entities/Book'
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql'
import { MyContext } from 'src/types/types'
import { User } from '../entities/User'
import { SectionHighlight } from '../entities/SectionHighlight'
import { BookSection } from '../entities/BookSection'
import { BookInput } from '../types/resolverTypes'
// import { getConnection } from 'typeorm'

@Resolver()
export class BookResolver {
    @Mutation(() => Book)
    async saveBook(@Arg('book', () => BookInput) book: Book, @Ctx() { req }: MyContext): Promise<Book | null> {
        const userId = req.session.userId

        if (!userId) {
            return null
        }
        const user = (await User.findOne(userId)) || new User()

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
            tempSection.sectionTitle = section.sectionTitle
            tempSection.book = newBook
            section.sectionHighlights.forEach((highlight) => {
                let tempHighlight = new SectionHighlight()
                tempHighlight.note = highlight.note
                tempHighlight.bookSection = tempSection
                highlights.push({ ...tempHighlight } as SectionHighlight)
            })
            sections.push({ ...tempSection } as BookSection)
        })

        console.log(highlights)
        console.log(sections)

        return newBook
    }
}
