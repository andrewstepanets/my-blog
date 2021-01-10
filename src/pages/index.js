import Head from 'next/head'
import { Row, Col, Media, Card } from 'react-bootstrap'
import AuthorIntro from 'components/AuthorIntro'
import CardListItem from 'components/CardListItem'
import CardItem from 'components/CardItem'

import Layout from 'components/Layout'

import { getAllBlogs } from '../../lib/api'


export default function Home({ blogs }) {


  return (
    <div>
      <Head>
        <title>My Personal Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <AuthorIntro />
        <hr />
        <Row className="mb-5">
          {/* <Col md="10">
            <CardListItem />
          </Col> */}
          {
            blogs.map(blog =>
              <Col key={blog.slug} md="4">
                <CardItem
                  title={blog.title}
                  subtitle={blog.subtitle}
                  date={blog.date}
                  image={blog.coverImage} />
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

  const blogs = await getAllBlogs();

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
