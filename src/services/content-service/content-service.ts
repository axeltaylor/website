import { ContentBlock } from '../../models/content-block.model'

export interface ContentService {
  getIntroBlocks(): Promise<ContentBlock[]>
}
