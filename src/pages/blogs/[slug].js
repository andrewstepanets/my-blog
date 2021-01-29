


import { useEffect, useState } from 'react';
import Layout from 'components/Layout';
import ArticleHeader from 'components/ArticleHeader';
import ErrorPage from 'next/error';
import { getBlogBySlug, getPaginatedBlogs, onBlogUpdate } from 'lib/api';
import { Row, Col } from 'react-bootstrap'
import { urlFor } from 'lib/api';
import moment from 'moment';
import { useRouter } from 'next/router';

import BlogContent from 'components/BlogContent';
// import PreviewAlert from 'components/PreviewAlert';

const BlogDetail = ({ blog: initialBlog, preview }) => {
    const router = useRouter();
    const [blog, setBlog] = useState(initialBlog);

    useEffect(() => {
        let sub;
        if (preview) {
            sub = onBlogUpdate(blog.slug)
                .subscribe(update => {
                    setBlog(update.result)
                })
        }

        return () => sub && sub.unsubscribe()
    }, [])

    // if (!router.isFallback && !blog?.slug) {
    //   return <ErrorPage statusCode="404"/>
    // }

    if (router.isFallback) {
        return (
            <Layout className="blog-detail-page">
                Loading...
            </Layout>
        )
    }
    return (
        <Layout className="blog-detail-page">
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    {preview && <PreviewAlert />}
                    <ArticleHeader
                        title={blog.title}
                        subtitle={blog.subtitle}
                        coverImage={urlFor(blog.coverImage).height(600).url()}
                        author={blog.author}
                        date={moment(blog.date).format('LL')}
                    />
                    <hr />
                    {blog.content &&
                        <BlogContent content={blog.content} />
                    }
                </Col>
            </Row>
        </Layout>
    )

}

export async function getStaticProps({ params, preview = false, previewData }) {
    const blog = await getBlogBySlug(params.slug, preview);
    return {
        props: { blog, preview },
        revalidate: 1
    }
}

// TODO: Introduce fallback
export async function getStaticPaths() {

    const blogs = await getPaginatedBlogs();
    const paths = blogs?.map(b => ({ params: { slug: b.slug } }));
    return {
        paths,
        fallback: true
    }
}

export default BlogDetail;