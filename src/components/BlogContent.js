
import BlockContent from '@sanity/block-content-to-react'
import HighlightCode from 'components/HighlightCode'
import { urlFor } from '../../lib/api'

const serializers = {
    types: {
        code: ({ node }) => {
            return (
                <HighlightCode language={node.language}>
                    {node.code}
                    <div className="code-filename">{node.filename}</div>
                </HighlightCode>
            )
        },
        image: ({ node }) => {
            return (
                <div className="blog-image">
                    <img src={urlFor(node.asset).height(300).fit('max').url()} />
                    <div className="image-alt">
                        {node.alt}
                    </div>
                </div>
            )
        }
    }
}

export default function BlogContent({ content }) {
    return (
        <BlockContent
            serializers={serializers}
            blocks={content} />
    )
}