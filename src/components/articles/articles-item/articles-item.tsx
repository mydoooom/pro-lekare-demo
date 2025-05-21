import { Tags } from '@/components/articles/articles-item/tags'
import { ContentsQuery } from '@/graphql/graphql'
import Link from 'next/link'

interface ArticlesItemProps {
  article: ContentsQuery['contents'][number]
}

export function ArticlesItem({article}: ArticlesItemProps) {
  if (!article.translations) {
    return <p>This article doesn't have a translation</p>
  }

  const articleTranslation = article.translations[0]
  const tags = article.labels?.map((label ) => label?.label?.name)
  const slug = article.translations[0]?.slug

  return (
      <div className='my-5'>
        <Tags tags={tags}/>
        <Link href={`/articles/${slug}`}>
          <h1 className='font-serif font-extrabold text-2xl'>{articleTranslation?.name}</h1>
        </Link>

        <p>{articleTranslation?.perex}</p>
      </div>
  )
}