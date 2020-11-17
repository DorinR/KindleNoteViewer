import TextCleaner from 'text-cleaner'

const clean = (dirtyText: string): string => {
    return TextCleaner(dirtyText).condense().valueOf()
}

export default clean
