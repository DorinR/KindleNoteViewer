const customBox = {
    mb: 5,
    p: 3,
    borderLeftWidth: '10px',
    borderColor: 'red.300',
    backgroundColor: 'gray.100',
}

const customBox_dark = {
    ...customBox,
    borderColor: 'red.500',
    backgroundColor: 'gray.600',
}

const boxStyles = { customBox, customBox_dark }

export default boxStyles
