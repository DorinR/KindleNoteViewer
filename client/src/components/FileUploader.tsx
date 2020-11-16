import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

interface FileUploaderProps {
    setRawHtml: React.Dispatch<React.SetStateAction<string>>
}

const FileUploader: React.FC<FileUploaderProps> = ({ setRawHtml }) => {
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file: any) => {
            const reader = new FileReader()

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                if (typeof reader.result === 'string') {
                    setRawHtml(reader.result)
                }
            }
            reader.readAsText(file)
        })
    }, [])
    const { getRootProps, getInputProps } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
    )
}

export default FileUploader
