
import Layout from 'components/Layout'
import { Row, Col } from 'react-bootstrap'
import { getBlogBySlug, getAllBlogs } from '../../../lib/api'
import ArticleHeader from 'components/ArticleHeader'
import BlogContent from 'components/BlogContent'



export async function getStaticPaths() {
    const blogs = await getAllBlogs();
    return {
        paths: blogs?.map(blog => ({ params: { slug: blog.slug } })),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const blog = await getBlogBySlug(params.slug);
    return {
        props: { blog }
    }
}



function BlogDetail({ blog }) {
    return (
        <Layout className="blog-detail-page">
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    <ArticleHeader
                        title={blog.title}
                        subtitle={blog.subtitle}
                        image={blog.coverImage}
                        author={blog.author}
                    />
                    <hr />
                    <BlogContent
                        content={blog.content}
                    />
                </Col>
            </Row>
        </Layout>
    )
}

export default BlogDetail