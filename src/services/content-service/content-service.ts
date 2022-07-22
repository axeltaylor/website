import { ContentBlock } from '../../models/content-block'
import { ContentEntry } from '../../models/content-entry'

export interface ContentService {
  getIntroBlocks(): Promise<ContentBlock[]>
  getEntries(): Promise<ContentEntry[]>
}
