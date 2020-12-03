// titleAuthorBoxStyles
const titleAuthorBox = {
    mb: 5,
    p: 3,
    borderLeftWidth: '10px',
    borderColor: 'red.300',
    backgroundColor: 'gray.100',
    borderTopRightRadius: 'lg',
    borderBottomRightRadius: 'lg',
}

const titleAuthorBox_dark = {
    ...titleAuthorBox,
    borderColor: 'red.500',
    backgroundColor: 'gray.600',
}

export const titleAuthorBoxStyles = { titleAuthorBox, titleAuthorBox_dark }

// individualHighlightBoxStyles
const highlightBox = {
    borderLeftWidth: '4px',
    borderColor: 'red.300',
    backgroundColor: 'gray.100',
    borderTopRightRadius: 'lg',
    borderBottomRightRadius: 'lg',
}

const highlightBox_dark = {
    ...highlightBox,
    borderColor: 'red.500',
    backgroundColor: 'gray.600',
}

export const highlightBoxStyles = { highlightBox, highlightBox_dark }
