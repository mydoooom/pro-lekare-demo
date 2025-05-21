"use client"

import { ArticlesQuery } from '@/api/queries/ArticlesQuery'
import { ArticlesItem } from '@/components/articles/articles-item/articles-item'
import { ContentsQuery } from '@/graphql/graphql'
import request from '@/graphql/request'
import { useQuery } from '@tanstack/react-query'
import { Fragment } from 'react'

// interface ArticlesListProps {
//   articles: Array<ContentsQuery['contents'][number]>
// }

export function ArticlesList () {
  const { data: articles, isLoading, isError, error } = useQuery({
    queryKey: ['articles'],
    queryFn: () => request<ContentsQuery>(ArticlesQuery, {
      language: "cs-CZ"
    })
  })

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error: {error.message}</p>
  if (!articles) return <p>Something bad happened </p>

  return (
    <>
      {articles.contents.map(article => (
       <Fragment key={article.id}>
         <ArticlesItem article={article}/>
         <hr/>
       </Fragment>
      ))}
    </>
  )
}