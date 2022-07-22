import { Client as NotionClient } from '@notionhq/client'

import { serverEnv } from '../../config/server-env'
import { ContentBlock } from '../../models/content-block'
import { ContentEntry } from '../../models/content-entry'
import { ContentService } from './content-service'
import { mapNotionBlockToContentBlock } from './notion-content.mapper'

export class NotionContentService implements ContentService {
  private client: NotionClient
  constructor() {
    this.client = new NotionClient({ auth: serverEnv.notionAccessToken })
  }

  public async getIntroBlocks(): Promise<ContentBlock[]> {
    const result = await this.client.blocks.children.list({
      block_id: serverEnv.notionContentIds.introPage,
    })
    this.getEntries()
    return mapNotionBlockToContentBlock(result.results)
  }

  public async getEntries(): Promise<ContentEntry[]> {
    const dbResults = await this.client.databases.query({
      database_id: serverEnv.notionContentIds.entriesDB,
    })

    const result2 = await this.client.pages.retrieve({
      page_id: result.results[1].id,
    })
    console.log(JSON.stringify(result2))
    return []
  }
}
