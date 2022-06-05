import { Client as NotionClient } from '@notionhq/client'

import { serverEnv } from '../../config/server-env'
import { ContentBlock } from '../../models/content-block.model'
import { ContentService } from './content-service'
import { mapNotionBlockToContentBlock } from './notion-content.mapper'

export class NotionContentService implements ContentService {
  private client: NotionClient
  constructor() {
    this.client = new NotionClient({ auth: serverEnv.notionAccessToken })
  }

  public async getBio(): Promise<ContentBlock[]> {
    const result = await this.client.blocks.children.list({
      block_id: serverEnv.notionContentIds.bioPage,
    })
    return mapNotionBlockToContentBlock(result.results)
  }
}
