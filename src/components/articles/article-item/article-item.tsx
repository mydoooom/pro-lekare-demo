import { Tags } from '@/components/articles/article-item/tags'
import { Contents, ContentsQuery } from '@/graphql/graphql'
import { QueryResultEntity } from '../../../../types/utils'

interface ArticleItemProps {
  article: ContentsQuery['contents'][number]
}

export function ArticleItem({article}: ArticleItemProps) {
  if (!article.translations) {
    return <p>This article doesn't have a translation</p>
  }

  const articleTranslation = article.translations[0]
  const tags = article.labels?.map((label ) => label?.label?.name)
  return (
      <div className='my-5'>
        <Tags tags={tags}/>
        <h1 className='font-serif font-extrabold text-2xl'>{articleTranslation?.name}</h1>
        <p>{articleTranslation?.perex}</p>
      </div>
  )
}