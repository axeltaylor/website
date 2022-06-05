export const serverEnv = {
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN || '',
  notionContentIds: {
    bioPage: process.env.NOTION_ID_PAGE_BIO || '',
  },
}
