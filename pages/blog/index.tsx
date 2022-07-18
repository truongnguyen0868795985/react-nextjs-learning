import * as React from 'react'

import { Box, Container, Divider } from '@mui/material'
import { GetStaticProps, GetStaticPropsContext } from 'next'

import Link from 'next/link'
import { MainLayout } from '@/components/layout'
import { PostItem } from '@/components/blog'
import { getPostList } from '@/utils/posts'

export interface BlogListPageProps {
  posts: any[]
}

export default function BlogListPage({ posts }: BlogListPageProps) {
  console.log('posts', posts)

  return (
    <Box>
      <Container>
        <h1>Blog</h1>

        <Box component="ul" sx={{ listStyleType: 'none', p: 0 }}>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`}>
                <a>
                  <PostItem post={post} />
                </a>
              </Link>
              <Divider sx={{ my: 3 }} />
            </li>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

BlogListPage.layout = MainLayout

export const getStaticProps: GetStaticProps<BlogListPageProps> = async (
  context: GetStaticPropsContext
) => {
  // server-side
  // build-time
  // console.log('static props')
  // const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  // const data = await response.json()
  // console.log(data)

  // convert markdown files into list of javascript objects
  const postList = await getPostList()

  return {
    props: {
      posts: postList,
    },
  }
}
