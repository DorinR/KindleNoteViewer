import React from 'react'
import {useRouter} from 'next/router'

interface ChangePasswordProps {}

export const changePassword: React.FC<ChangePasswordProps> = () => {
    const router = useRouter()
    
    
    const { token } = router.query 
    
    return (
        <p>Token: ${token}</p>
    )
}

export default changePassword