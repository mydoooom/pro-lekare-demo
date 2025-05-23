import { Tags } from '@/components/ui/tags'
import { ContentBySlugQuery } from '@/graphql/graphql'
import parse from 'html-react-parser'
import Image from 'next/image'

interface ArticleProps {
  article: ContentBySlugQuery['contents'][number]
}

export function Article ({ article }: ArticleProps) {
  if (!article.translations) {
    return <p>This article doesn't have a translation</p>
  }

  const articleTranslation = article.translations[0]
  const image = article.translations[0]?.image
  const formattedDate = new Intl.DateTimeFormat('cs-CZ', {
    dateStyle: 'long'
  })
    .format(new Date(articleTranslation?.date_created))

  return (
    <>
      {article.labels &&
        <Tags tags={article.labels.map((label) => label?.label?.name)}/>
      }
      <h2 className='font-serif font-extrabold text-4xl mb-4'>{articleTranslation?.name}</h2>
      <div className='flex items-center col-start-1 col-end-3 mb-6'>
        <p>Téma: </p>
        <span className='h-4 w-px bg-neutral-700 mx-3'></span>
        <p>{formattedDate}</p>
      </div>
      <hr className='mb-6'/>
      {image &&
        <Image
          className={`w-full aspect-3/2 object-cover mb-6`}
          src={`https://directus.devmed.cz/assets/${image.id}`}
          width={image.width || 0}
          height={image.height || 0}
          alt={'obrazek'}
        />
      }
      <p className='font-bold mb-4'>{articleTranslation?.perex}</p>
      <br/>
      <div>
        {articleTranslation?.content && parse(articleTranslation.content)}
      </div>
    </>
  )
}