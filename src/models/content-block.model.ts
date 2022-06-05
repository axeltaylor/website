// These interfaces are workarounds until this pr is approved or another solution is found: https://github.com/makenotion/notion-sdk-js/pull/290

export enum ContentBlockType {
  Paragraph = 'paragraph',
  BulletedList = 'bulleted_list',
  NumberedList = 'numbered_list',
  Heading1 = 'heading_1',
  Heading2 = 'heading_2',
  Heading3 = 'heading_3',
}

export interface ContentBlock {
  type: ContentBlockType
}

export interface ParagraphContentBlock extends ContentBlock, TextContentBlock {
  type: ContentBlockType.Paragraph
}

export interface HeadingContentBlock extends ContentBlock, TextContentBlock {
  type:
    | ContentBlockType.Heading1
    | ContentBlockType.Heading2
    | ContentBlockType.Heading3
}

export interface ListContentBlock extends ContentBlock {
  list: TextContentBlock[]
}

export interface BulletedListContentBlock extends ListContentBlock {
  type: ContentBlockType.BulletedList
}

export interface NumberedListContentBlock extends ListContentBlock {
  type: ContentBlockType.NumberedList
}

export interface TextContentBlock {
  richTexts: RichTextContent[]
}

export enum RichTextContentBlockType {
  Text,
}

export interface RichTextContent {
  type: RichTextContentBlockType
  text: string
  href?: string
  isBold: boolean
  isItalic: boolean
  isStrikethrough: boolean
  isUnderline: boolean
  isCode: boolean
}
