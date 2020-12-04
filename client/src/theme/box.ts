import { boxRoundedCornersRight, borderBgLight, borderBgDark } from './boxFragments'

// titleAuthorBoxStyles
const titleAuthorBox = {
    ...boxRoundedCornersRight,
    ...borderBgLight,
    mb: 5,
    p: 3,
    borderLeftWidth: '10px',
}

const titleAuthorBox_dark = {
    ...titleAuthorBox,
    ...borderBgDark,
}

export const titleAuthorBoxStyles = { titleAuthorBox, titleAuthorBox_dark }

// individualHighlightBoxStyles
const highlightBox = {
    ...boxRoundedCornersRight,
    ...borderBgLight,
    borderLeftWidth: '4px',
}

const highlightBox_dark = {
    ...highlightBox,
    ...borderBgDark,
}

export const highlightBoxStyles = { highlightBox, highlightBox_dark }
