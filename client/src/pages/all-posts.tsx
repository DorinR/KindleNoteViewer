import React from 'react'
import { NavBar } from '../components/NavBar'
import RegularPageShaper from '../components/RegularPageShaper'
import { usePostsQuery } from '../generated/graphql'

const AllPosts: React.FC = ({}) => {
    const [result] = usePostsQuery()

    console.log(result)
    let { data, fetching } = result

    let body = null

    if (fetching) {
        // do nothing
    } else {
    }

    return (
        <>
            <NavBar />
            <RegularPageShaper>
                <div>This is the posts page</div>
            </RegularPageShaper>
        </>
    )
}

export default AllPosts
