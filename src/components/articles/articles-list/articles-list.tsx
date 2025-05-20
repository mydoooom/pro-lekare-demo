"use client"

import { useArticles } from '@/api/useArticles'
import { ArticleItem } from '@/components/articles/article-item/article-item'

export function ArticlesList() {

  const { data: articles, isLoading, isError, error } = useArticles()

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error: {error.message}</p>
  if (!articles) return <p>Something bad happened </p>

  return (
    <>
      {articles.contents_translations.map(article => (
        <ArticleItem key={article.id} article={article}/>
      ))}
    </>
  )
}