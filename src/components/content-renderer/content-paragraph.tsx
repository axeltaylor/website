import { ParagraphContentBlock } from '../../models/content-block'
import ContentRichText from './content-rich-text'

type ContentParagraphProps = {
  block: ParagraphContentBlock
}

const ContentParagraph = ({ block }: ContentParagraphProps) => {
  return (
    <p>
      <ContentRichText richTexts={block.richTexts} />
    </p>
  )
}

export default ContentParagraph
