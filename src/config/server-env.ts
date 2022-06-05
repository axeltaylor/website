export const serverEnv = {
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN || '',
  notionContentIds: {
    introPage: process.env.NOTION_ID_PAGE_INTRO || '',
  },
}
