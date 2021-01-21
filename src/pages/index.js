
import { Row, Col } from 'react-bootstrap'
import AuthorIntro from 'components/AuthorIntro'
import CardItem from 'components/CardItem'
import Layout from 'components/Layout'
import FilteringMenu from 'components/FilteringMenu'

import { getAllBlogs } from '../../lib/api'
import { useState } from 'react'
import CardListItem from 'components/CardListItem'

import { useGetBlogs } from '../../actions'





export default function Home({ blogs: initialData }) {

  const [filter, setFilter] = useState(false)

  const { data: blogs, error } = useGetBlogs(initialData);


  return (
    <div>
      <Layout>
        <AuthorIntro />
        <FilteringMenu
          filter={filter}
          onChange={() => {
            setFilter(!filter)
          }} />
        <hr />
        <Row className="mb-5">
          {
            blogs.map(blog =>

              filter ?
                <Col key={`${blog.slug}-list`} md="9">
                  <CardListItem
                    author={blog.author}
                    title={blog.title}
                    subtitle={blog.subtitle}
                    date={blog.date}
                    link={{
                      href: 'blog/[slug]',
                      as: `/blog/${blog.slug}`
                    }} />
                </Col>
                :
                <Col key={blog.slug} md="4">
                  <CardItem
                    author={blog.author}
                    title={blog.title}
                    subtitle={blog.subtitle}
                    date={blog.date}
                    image={blog.coverImage}
                    link={{
                      href: 'blog/[slug]',
                      as: `/blog/${blog.slug}`
                    }} />
                </Col>
            )
          }
        </Row>

      </Layout>
    </div>
  )
}

//This function is called during the buid (build time)
// Provides props to your pageProps
// It will create static page


// This is the example of generation of static page
export async function getStaticProps() {

  const blogs = await getAllBlogs({ offset: 3 });

  return {
    props: {
      blogs
    }
  }
}


// This is example of generation dynamic page
// export async function getServerSideProps() {

//   const blogs = await getAllBlogs();

//   return {
//     props: {
//       blogs
//     }
//   }
// }
