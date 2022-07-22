// import 'react-syntax-highlighter/dist/esm/styles/prism/prism'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import swift from 'react-syntax-highlighter/dist/cjs/languages/prism/swift'
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript'

import { CodeContentBlock } from '../../models/content-block'
import dracula from '../../third-party/react-syntax-highlighter/dracula'

SyntaxHighlighter.registerLanguage('typescript', typescript)
SyntaxHighlighter.registerLanguage('swift', swift)

type ContentCodeProps = {
  block: CodeContentBlock
}

export const ContentCode = ({ block }: ContentCodeProps) => {
  return (
    <SyntaxHighlighter
      language={block.language}
      style={dracula}
      {...{ className: 'bg-not-blue bg-opacity-10' }}>
      {block.code}
    </SyntaxHighlighter>
  )
}
