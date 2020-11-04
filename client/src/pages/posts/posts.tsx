import { CircularProgress, Text } from '@chakra-ui/core'
import React from 'react'
import { FormShaper } from '../../components/FormShaper'
import { NavBar } from '../../components/NavBar'
import { Post } from '../../components/Post'
import { usePostsQuery } from '../../generated/graphql'

const Posts: React.FC = ({}) => {
    const [{ data }] = usePostsQuery()

    let posts = null

    if (!data) {
        posts = <CircularProgress isIndeterminate color='teal'></CircularProgress>
    } else {
        posts = Object.values(data.posts).map((el) => (
            <Post key={el.id} title={el.title} content={el.content} username={el.createdBy}></Post>
        ))
    }

    return (
        <>
            <NavBar />
            <FormShaper>
                <Text fontSize='5xl'>Posts</Text>
                {posts}
            </FormShaper>
        </>
    )
}

export default Posts
