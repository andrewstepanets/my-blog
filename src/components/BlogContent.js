
import BlockContent from '@sanity/block-content-to-react'
import HighlightCode from 'components/HighlightCode'
import { urlFor } from 'lib/api'

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
        image: ({ node: { asset, alt, position = 'center' } }) => {
            return (
                <div className={`blog-image blog-image-${position}`}>
                    <img src={urlFor(asset).height(300).fit('max').url()} />
                    <div className="image-alt">
                        {alt}
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