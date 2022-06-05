import { ContentService } from './content-service'
import { NotionContentService } from './notion-content.service'

export const contentService: ContentService = new NotionContentService()
