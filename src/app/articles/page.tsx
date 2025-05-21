import { ArticlesList } from '@/components/articles'
import { ContentsQuery } from '@/graphql/graphql'
import request from '@/graphql/request'
import { ArticlesQuery } from '@/api/queries/ArticlesQuery'

export default async function ArticlesPage () {
  const articles = await request<ContentsQuery>(ArticlesQuery)

  return (
    <>
      <ArticlesList articles={articles}/>
    </>
  )
}