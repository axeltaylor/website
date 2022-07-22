import { NumberedListContentBlock } from '../../models/content-block'
import ContentRichText from './content-rich-text'

type ContentNumberedListProps = {
  block: NumberedListContentBlock
}

const ContentNumberedList = ({ block }: ContentNumberedListProps) => {
  return (
    <ol className="pl-4 list-decimal">
      {block.list.map((item, itemIndex) => (
        <li key={itemIndex}>
          <ContentRichText richTexts={item.richTexts} />
        </li>
      ))}
    </ol>
  )
}

export default ContentNumberedList
