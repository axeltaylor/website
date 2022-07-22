import { Fragment } from 'react'

import { RichTextContent } from '../../models/content-block'

type ContentRichTextProps = {
  richTexts: RichTextContent[]
}

function renderRichText(richText: RichTextContent, key: number) {
  let node = <>{richText.text}</>
  if (richText.href) {
    node = <a href={richText.href}>{node}</a>
  }
  if (richText.isBold) {
    node = <b>{node}</b>
  }
  if (richText.isItalic) {
    node = <i>{node}</i>
  }
  if (richText.isStrikethrough) {
    node = <s>{node}</s>
  }
  if (richText.isUnderline) {
    node = <u>{node}</u>
  }
  if (richText.isCode) {
    node = (
      <code className="bg-not-blue bg-opacity-10 rounded-sm px-2 py-0.5">
        {node}
      </code>
    )
  }
  return <Fragment key={key}>{node}</Fragment>
}

const ContentRichText = ({ richTexts }: ContentRichTextProps) => {
  return <>{richTexts.map(renderRichText)}</>
}

export default ContentRichText
