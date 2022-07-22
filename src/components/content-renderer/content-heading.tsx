import {
  ContentBlockType,
  HeadingContentBlock,
} from '../../models/content-block'
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
        <SectionHeader className="my-3">
          <ContentRichText richTexts={block.richTexts} />
        </SectionHeader>
      )
    case ContentBlockType.Heading2:
      return (
        <SectionSubHeader className="my-2">
          <ContentRichText richTexts={block.richTexts} />
        </SectionSubHeader>
      )
    case ContentBlockType.Heading3:
      return (
        <h3 className="text-lg font-bold my-1">
          <ContentRichText richTexts={block.richTexts} />
        </h3>
      )
  }
}

export default ContentHeading
