import { ContentBlock } from '../../models/content-block.model'

export interface ContentService {
  getBio(): Promise<ContentBlock[]>
}
