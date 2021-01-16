
import BlockContent from '@sanity/block-content-to-react'

const serializers = {
    types: {
        code: ({ node }) => (
            <pre data-language={node.language}>
                <code>{node.code}</code>
                <p>{node.filename}</p>
            </pre>
        )
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