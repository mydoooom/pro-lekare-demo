"use client"

import { ArticlesQuery } from '@/api/queries/ArticlesQuery'
import { ArticleItem } from '@/components/articles/article-item/article-item'
import { ContentsQuery } from '@/graphql/graphql'
import { useQuery } from '@tanstack/react-query'
import request from '@/graphql/request'


export function ArticlesList () {

  const { data: articles, isLoading, isError, error } = useQuery({
    queryKey: ['articles'],
    queryFn: () => request<ContentsQuery>(ArticlesQuery)
  })

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error: {error.message}</p>
  if (!articles) return <p>Something bad happened </p>

  console.log(articles.contents)
  return (
    <>
      {articles.contents.map(article => (
        <ArticleItem key={article.id} article={article}/>
      ))}
    </>
  )
}