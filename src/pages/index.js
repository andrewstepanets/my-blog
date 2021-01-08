import Head from 'next/head'
import { Row, Col, Media, Card } from 'react-bootstrap'
import AuthorIntro from 'components/AuthorIntro'
import CardListItem from 'components/CardListItem'
import CardItem from 'components/CardItem'

import Layout from 'components/Layout'


export default function Home() {
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
