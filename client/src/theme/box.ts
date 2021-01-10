import { boxRoundedCornersRight, borderBgLight, borderBgDark } from './boxFragments'

// titleAuthorBoxStyles
const titleAuthorBox = {
    ...boxRoundedCornersRight,
    ...borderBgLight,
    mb: 3,
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

const standardShadowBox = {
    mb: 5,
    p: 4,
    fontWeight: 'semibold',
    as: 'h2',
    bg: '#FAFAFA',
    borderColor: 'grey.300',
    borderWidth: '1px',
    color: 'grey.600',
    transitionDuration: '0.2s',
    _hover: { shadow: 'lg', boxShadow: 'lg' },
}

const standardShadowBoxButton = {
    ...standardShadowBox,
    cursor: 'pointer',
}

const standardShadowBox_dark = {
    ...standardShadowBox,
    bg: '#2C323D',
    borderColor: 'grey.400',
    borderWidth: '2px',
    color: 'white',
    _hover: { shadow: 'lg', boxShadow: '0 0 10px -2px grey' },
}

const standardShadowBoxButton_dark = {
    ...standardShadowBox_dark,
    cursor: 'pointer',
}

export const standardShadowBoxStyles = {
    standardShadowBox,
    standardShadowBox_dark,
    standardShadowBoxButton,
    standardShadowBoxButton_dark,
}
