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
        {
          JSON.stringify(blogs)
        }
        <Row className="mb-5">
          <Col md="10">
            <CardListItem />
          </Col>
          <Col md="4">
            <CardItem />
          </Col>
        </Row>

      </Layout>
    </div>
  )
}

//This function is called during the buid (build time)
// Provides props to your pageProps
// It will create static page

export async function getStaticProps() {

  const blogs = await getAllBlogs();

  return {
    props: {
      blogs
    }
  }
}
