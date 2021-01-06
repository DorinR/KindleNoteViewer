import React from 'react'
import { FormShaper } from '../FormShaper'
import { NavBar } from '../NavBar'

const withNavbar = (WrappedComponent: React.FC) => {
    return (
        <>
            <NavBar />
            <FormShaper>{WrappedComponent}</FormShaper>
        </>
    )
}

export default withNavbar
