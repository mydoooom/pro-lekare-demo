import { Tags } from '@/components/ui/tags'
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

  if (main) {
    return (
      <div className='my-5'>
        <Link href={`/articles/${slug}`}>
          <h3 className='font-serif font-extrabold text-3xl mb-4 hover:underline'>{articleTranslation?.name}</h3>
        </Link>
        <div className={`${main ? 'grid grid-cols-1' : 'grid grid-cols-[1fr_2fr]'} gap-4`}>
          <Image
            className={`w-full aspect-3/2 object-cover ${!image ? 'border-1 border-neutral-400' : ''}`}
            src={image ? `https://directus.devmed.cz/assets/${image?.id}` : '/placeholder-image.jpg'}
            width={image?.width || 500}
            height={image?.height || 435}
            alt={'obrazek'}
          />
          <Tags tags={tags}/>
          <p>{formattedDate}</p>
          <p>{articleTranslation?.perex}</p>
        </div>
      </div>
    )
  }

  return (
    <div className='my-5'>
      <div className='grid md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] gap-4'>
        <div></div>
        <Tags tags={tags}/>
      </div>
      <div className={`grid ${main ? 'grid-cols-1' : 'grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr]'} gap-4 mb-4`}>
        <Image
          className={`w-full aspect-3/2 object-cover ${!image ? 'border-1 border-neutral-400' : ''}`}
          src={image ? `https://directus.devmed.cz/assets/${image?.id}` : '/placeholder-image.jpg'}
          width={image?.width || 500}
          height={image?.height || 435}
          alt={'obrazek'}
        />
        <div>
          <Link href={`/articles/${slug}`}>
            <h3 className='font-serif font-extrabold text-2xl mb-4 hover:underline'>{articleTranslation?.name}</h3>
          </Link>
          <div className=' hidden md:flex items-center mb-4'>
            <p>Téma: </p>
            <span className='h-4 w-px bg-neutral-700 mx-3'></span>
            <p>{formattedDate}</p>
          </div>
        </div>
        <div className='flex items-center col-start-1 col-end-3 md:hidden'>
          <p>Téma: </p>
          <span className='h-4 w-px bg-neutral-700 mx-3'></span>
          <p>{formattedDate}</p>
        </div>
      </div>
      <p className='hidden md:block'>{articleTranslation?.perex}</p>

    </div>
  )
}