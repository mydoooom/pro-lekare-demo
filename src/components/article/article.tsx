import { ContentBySlugQuery } from '@/graphql/graphql'
import parse from 'html-react-parser'

interface ArticleProps {
  article: ContentBySlugQuery['contents'][number]
}
export function Article({ article }: ArticleProps) {
  if (!article.translations) {
    return <p>This article doesn't have a translation</p>
  }

  const articleTranslation = article.translations[0]

  return (
    <>
      <h1 className='font-serif font-extrabold text-2xl'>{articleTranslation?.name}</h1>
      <p>{articleTranslation?.perex}</p>
      <br/>
      <div>
        {articleTranslation?.content && parse(articleTranslation.content)}
      </div>
    </>
  )
}