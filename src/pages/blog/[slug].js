
import Layout from 'components/Layout'
import { getBlogBySlug } from '../../../lib/api'


export async function getServerSideProps({ params }) {
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