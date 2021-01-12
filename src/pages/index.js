
import { Row, Col } from 'react-bootstrap'
import AuthorIntro from 'components/AuthorIntro'
import CardItem from 'components/CardItem'

import Layout from 'components/Layout'

import { getAllBlogs } from '../../lib/api'


export default function Home({ blogs }) {


  console.log(blogs);

  return (
    <div>

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
                  author={blog.author}
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
