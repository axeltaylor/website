import { ContentBlock } from './content-block'

export enum ContentEntryType {
  Youtube = 'youtube',
  TwitchClip = 'twitch-clip',
  TwitchVOD = 'twitch-vod',
  BlogPost = 'blog-post',
  Hyperlink = 'hyperlink',
}

export enum ContentEntryStatus {
  NotStarted = 'not-started',
  Draft = 'draft',
  Published = 'published',
  Archived = 'archived',
}

export interface ContentEntry {
  type: ContentEntryType
  src?: string
  coverSrc?: string
  status?: string
  tags?: string[]
  emoji?: string
  content: ContentBlock[]
}
