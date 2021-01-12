
import Layout from 'components/Layout'
import { useRouter } from 'next/router'

function BlogDetail() {
    const { query } = useRouter()
    return (
        <Layout>
            <h1>Details Page - {query?.slug}</h1>
        </Layout>
    )
}

export default BlogDetail