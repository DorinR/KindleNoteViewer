import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { createUseStyles } from 'react-jss'
import validateUploadedFile from '../utils/validateFileType'
import swal from 'sweetalert'

interface FileUploaderProps {
    setRawHtml: React.Dispatch<React.SetStateAction<string>>
}

const useStyles = createUseStyles({
    dropzone: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderWidth: '2px',
        borderRadius: '2px',
        borderColor: '#EEEEEE',
        borderStyle: 'dashed',
        backgroundColor: '#FAFAFA',
        color: '#bdbdbd',
        outline: 'none',
        transition: 'border .24s ease-in-out',
    },
})

const FileUploader: React.FC<FileUploaderProps> = ({ setRawHtml }) => {
    const classes = useStyles()

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file: any) => {
            const isFileValid = validateUploadedFile({ filename: file.name, size: file.size })
            const reader = new FileReader()

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                if (typeof reader.result === 'string') {
                    setRawHtml(reader.result)
                }
            }
            if (isFileValid.valid) {
                reader.readAsText(file)
            } else {
                reader.abort()
                if (isFileValid.errorMessage) {
                    swal('Something went wrong', isFileValid.errorMessage, 'error')
                }
            }
        })
    }, [])
    const { getRootProps, getInputProps } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()} className={classes.dropzone}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop your book highlights HTML file, or click to browse and select file</p>
        </div>
    )
}

export default FileUploader
