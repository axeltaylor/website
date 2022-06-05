import { BulletedListContentBlock } from '../../models/content-block.model'
import ContentRichText from './content-rich-text'

type ContentBulletedListProps = {
  block: BulletedListContentBlock
}

const ContentBulletedList = ({ block }: ContentBulletedListProps) => {
  return (
    <ul className="pl-4 list-disc">
      {block.list.map((item, itemIndex) => (
        <li key={itemIndex}>
          <ContentRichText richTexts={item.richTexts} />
        </li>
      ))}
    </ul>
  )
}

export default ContentBulletedList
