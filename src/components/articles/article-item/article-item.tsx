import { Contents, ContentsQuery } from '@/graphql/graphql'
import { QueryResultEntity } from '../../../../types/utils'

interface ArticleItemProps {
  article: ContentsQuery['contents'][number]
}

export function ArticleItem({article}: ArticleItemProps) {
  console.log(article)
  return (
    <>
      <h1>{article?.translations[0].name}</h1>
    </>
  )
}