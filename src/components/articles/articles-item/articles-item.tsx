import { Tags } from '@/components/articles/articles-item/tags'
import { ContentsQuery } from '@/graphql/graphql'
import Image from 'next/image'
import Link from 'next/link'

interface ArticlesItemProps {
  main?: boolean
  article: ContentsQuery['contents'][number]
}

export function ArticlesItem ({ main, article }: ArticlesItemProps) {
  if (!article.translations) {
    return <p>This article doesn't have a translation</p>
  }

  const articleTranslation = article.translations[0]
  const tags = article.labels?.map((label) => label?.label?.name)
  const slug = article.translations[0]?.slug
  const image = article.translations[0]?.image

  const formattedDate = new Intl.DateTimeFormat('cs-CZ', {
    dateStyle: 'long'
  })
    .format(new Date(articleTranslation?.date_created))

  return (
    <div className='my-5'>
      <Tags tags={tags}/>
      <div className='grid grid-cols-[1fr_2fr] gap-4'>
        <Image
          className={`w-full aspect-3/2 object-cover ${!image ? 'border-1 border-neutral-400' : ''}`}
          src={image ? `https://directus.devmed.cz/assets/${image?.id}` : '/placeholder-image.jpg'}
          width={image?.width || 500}
          height={image?.height || 435}
          alt={'obrazek'}
        />
        <div>
          <Link href={`/articles/${slug}`}>
            <h3 className='font-serif font-extrabold text-2xl'>{articleTranslation?.name}</h3>
          </Link>
          <p className='hidden md:block'>{articleTranslation?.perex}</p>
        </div>
        <div className='flex items-center'>
          <p>Téma: </p>
          <span className='h-4 w-px bg-neutral-700 mx-3'></span>
          <p>{formattedDate}</p>
        </div>
      </div>
    </div>
  )
}