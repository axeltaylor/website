import {
  ContentBlockType,
  HeadingContentBlock,
} from '../../models/content-block.model'
import SectionHeader from '../section/SectionHeader'
import SectionSubHeader from '../section/SectionSubHeader'
import ContentRichText from './content-rich-text'

type ContentHeadingProps = {
  block: HeadingContentBlock
}

const ContentHeading = ({ block }: ContentHeadingProps) => {
  switch (block.type) {
    case ContentBlockType.Heading1:
      return (
        <SectionHeader>
          <ContentRichText richTexts={block.richTexts} />
        </SectionHeader>
      )
    case ContentBlockType.Heading2:
      return (
        <SectionSubHeader>
          <ContentRichText richTexts={block.richTexts} />
        </SectionSubHeader>
      )
    case ContentBlockType.Heading3:
      return (
        <h3 className="text-lg font-bold">
          <ContentRichText richTexts={block.richTexts} />
        </h3>
      )
  }
}

export default ContentHeading
