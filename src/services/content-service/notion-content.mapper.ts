import {
  BulletedListContentBlock,
  ContentBlock,
  ContentBlockType,
  ListContentBlock,
  NumberedListContentBlock,
  RichTextContent,
  TextContentBlock,
} from '../../models/content-block.model'

// all notion types are any | any[] until notion publishes their api types.
export function mapNotionBlockToContentBlock(
  notionResults: any[] = []
): ContentBlock[] {
  return notionResults.reduce((contents, notionBlock, index) => {
    const isFirstOfType = notionBlock.type !== notionResults[index - 1]?.type
    const previousBlock = contents[contents.length - 1]
    switch (notionBlock.type) {
      case 'paragraph':
      case 'heading_1':
      case 'heading_2':
      case 'heading_3':
        return [...contents, mapTextBasedBlock(notionBlock)]
      case 'bulleted_list_item':
      case 'numbered_list_item':
        const listBlock =
          notionBlock.type === 'bulleted_list_item'
            ? mapBulletedListContentBlock(notionBlock)
            : mapNumberedListContentBlock(notionBlock)
        if (isFirstOfType) {
          return [...contents, listBlock]
        } else {
          const latestListContentBlock = previousBlock as ListContentBlock
          latestListContentBlock.list = [
            ...latestListContentBlock.list,
            ...listBlock.list,
          ]
          return contents
        }
      default:
        console.warn(`Uknown block: ${notionBlock.type}`, notionBlock)
        return contents
    }
  }, [] as ContentBlock[])
}

function mapTextBasedBlock(block: any): ContentBlock & TextContentBlock {
  return {
    type: block.type,
    richTexts:
      block[block.type].rich_text
        ?.filter((r: any) => r.type == 'text')
        .map(mapRichText) ?? [],
  }
}

function mapBulletedListContentBlock(block: any): BulletedListContentBlock {
  return {
    type: ContentBlockType.BulletedList,
    list: [mapListItemContentBlock(block.bulleted_list_item)],
  }
}

function mapNumberedListContentBlock(block: any): NumberedListContentBlock {
  return {
    type: ContentBlockType.NumberedList,
    list: [mapListItemContentBlock(block.numbered_list_item)],
  }
}

function mapListItemContentBlock(blockListItem: any): TextContentBlock {
  return {
    richTexts: blockListItem.rich_text?.map(mapRichText) ?? [],
  }
}

function mapRichText(richText: any): RichTextContent {
  return {
    type: richText.type,
    text: richText.plain_text,
    href: richText.href,
    isBold: richText.annotations?.bold || false,
    isCode: richText.annotations?.code || false,
    isItalic: richText.annotations?.italic || false,
    isStrikethrough: richText.annotations?.strikethrough || false,
    isUnderline: richText.annotations?.underline || false,
  }
}
