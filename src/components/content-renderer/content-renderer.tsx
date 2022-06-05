import {
  BulletedListContentBlock,
  ContentBlock,
  ContentBlockType,
  HeadingContentBlock,
  NumberedListContentBlock,
  ParagraphContentBlock,
} from '../../models/content-block.model'
import ContentBulletedList from './content-bulleted-list'
import ContentHeading from './content-heading'
import ContentNumberedList from './content-numbered-list'
import ContentParagraph from './content-paragraph'

type ContentRendererProps = {
  blocks: ContentBlock[]
}

const renderByTypeOfBlock = (block: ContentBlock, key: number) => {
  switch (block.type) {
    case ContentBlockType.Paragraph:
      return (
        <ContentParagraph block={block as ParagraphContentBlock} key={key} />
      )
    case ContentBlockType.BulletedList:
      return (
        <ContentBulletedList
          block={block as BulletedListContentBlock}
          key={key}
        />
      )
    case ContentBlockType.NumberedList:
      return (
        <ContentNumberedList
          block={block as NumberedListContentBlock}
          key={key}
        />
      )
    case ContentBlockType.Heading1:
    case ContentBlockType.Heading2:
    case ContentBlockType.Heading3:
      return <ContentHeading block={block as HeadingContentBlock} key={key} />
    default:
      console.warn(block.type, block)
      return null
  }
}

export const ContentRenderer = ({ blocks }: ContentRendererProps) => {
  return <div className="">{blocks.map(renderByTypeOfBlock)}</div>
}
