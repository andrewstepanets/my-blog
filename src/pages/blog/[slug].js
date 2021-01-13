
import Layout from 'components/Layout'
import { getBlogBySlug, getAllBlogs } from '../../../lib/api'

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
    console.log(blog);
    return (
        <Layout>
            <h1>Details Page - {blog?.slug}</h1>
        </Layout>
    )
}

export default BlogDetail