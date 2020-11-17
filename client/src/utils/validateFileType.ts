interface validateFileTypeResponse {
    valid: boolean
    errorMessage?: string
}

interface validateFileTypeArguments {
    filename: string
    size: number
}

const validateUploadedFile = (fileInfo: validateFileTypeArguments): validateFileTypeResponse => {
    if (fileInfo.filename.length < 5) {
        return {
            valid: false,
            errorMessage: 'File uploaded must have a ".html" extension',
        }
    }
    const filenameSections = fileInfo.filename.split('.')
    const fileExtension = filenameSections[filenameSections.length - 1]
    if (fileExtension.toLowerCase() !== 'html') {
        return {
            valid: false,
            errorMessage: 'Uploaded file must be an HTML file',
        }
    }

    if (fileInfo.size > 500000) {
        return {
            valid: false,
            errorMessage: 'Uploaded file is too large, verify that file is smaller than 0.5MB',
        }
    }
    return {
        valid: true,
    }
}

export default validateUploadedFile
