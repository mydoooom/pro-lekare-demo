import { ArticleQueryBySlug } from '@/api/queries/ArticleQueryBySlug'
import { Article } from '@/components/article'
import request from '@/graphql/request'

export default async function ArticlePage ({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await request(ArticleQueryBySlug, {
    languageCode: "cs-CZ",
    slug: slug
  })

  return (
    <>
      <Article article={article.contents[0]}/>
    </>
  )
}