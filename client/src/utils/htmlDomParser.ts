import JSSoup from 'jssoup'
import { Note, Section, BookHighlights } from '../utils/types/highlightParser'
import clean from '../utils/textCleaner'

const extractBookHighlights = (rawHtml: string): BookHighlights => {
    const bookHighlights: BookHighlights = { title: '', author: '', sections: [] }

    // create soup
    const soup = new JSSoup(rawHtml)

    // get title and author
    bookHighlights.title = clean(soup.find('div', 'bookTitle').text) || 'unknown title'
    bookHighlights.author = clean(soup.find('div', 'authors').text) || 'unknown author'

    // get all highlights
    const bodyElements = soup.find('div', 'bodyContainer').contents

    // empty section
    const sectionInitialState: Section = { sectionHeading: '', sectionNotes: [] }

    // main algorithm for extracting book highlights
    const sections: Section[] = []
    let currentSection: Section = { ...sectionInitialState }
    for (let i = 0; i < bodyElements.length; i++) {
        if (bodyElements[i].attrs.class === 'sectionHeading') {
            if (currentSection.sectionNotes.length > 0) {
                sections.push(currentSection)
                currentSection = { ...sectionInitialState }
            }
            currentSection.sectionHeading = clean(bodyElements[i].text)
        } else if (bodyElements[i].attrs.class === 'noteText') {
            currentSection.sectionNotes.push({
                note: clean(bodyElements[i].text),
            } as Note)
        }
    }

    bookHighlights.sections = sections

    return bookHighlights
}

export default extractBookHighlights
