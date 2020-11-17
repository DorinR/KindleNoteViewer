export interface Note {
    note: string
}

export interface Section {
    sectionHeading: string
    sectionNotes: Note[]
}

export interface BookHighlights {
    title: string
    author: string
    sections: Section[]
}
