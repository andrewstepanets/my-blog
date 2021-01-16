
import BlockContent from '@sanity/block-content-to-react'
import HighlightCode from 'components/HighlightCode'

const serializers = {
    types: {
        code: ({ node }) => {
            return (
                <HighlightCode language={node.language}>
                    {node.code}
                    <div className="code-filename">{node.filename}</div>
                </HighlightCode>
            )
        }
    }
}

export default function BlogContent({ content }) {
    return (
        <BlockContent
            imageOptions={{ w: 320, h: 240, fit: 'max' }}
            serializers={serializers}
            blocks={content} />
    )
}