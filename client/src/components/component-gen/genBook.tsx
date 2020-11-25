import { BookHighlights } from '../../generated/graphql'
import genSection from './genSection'

const genBook = (book: BookHighlights): JSX.Element[] => {
    const sections: JSX.Element[] = []

    if (book.sections) {
        for (let section of book.sections) {
            sections.push(genSection(section))
        }
    }

    return sections
}

export default genBook
