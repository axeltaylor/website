import {
  BulletedListContentBlock,
  CodeContentBlock,
  ContentBlock,
  ContentBlockType,
  HeadingContentBlock,
  ImageContentBlock,
  NumberedListContentBlock,
  ParagraphContentBlock,
} from '../../models/content-block'
import ContentBulletedList from './content-bulleted-list'
import { ContentCode } from './content-code'
import ContentHeading from './content-heading'
import ContentImage from './content-image'
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
    case ContentBlockType.Image:
      return <ContentImage block={block as ImageContentBlock} key={key} />
    case ContentBlockType.Code:
      return <ContentCode block={block as CodeContentBlock} key={key} />
    default:
      console.warn(`Uknown block to render: ${block.type}`, block)
      return null
  }
}

export const ContentRenderer = ({ blocks }: ContentRendererProps) => {
  return <div className="">{blocks.map(renderByTypeOfBlock)}</div>
}
