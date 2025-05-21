"use client"

import { ArticleItem } from '@/components/articles/article-item/article-item'
import { graphql } from '@/graphql'
import { Contents, ContentsQuery } from '@/graphql/graphql'
import { useQuery } from '@tanstack/react-query'
import request from 'graphql-request'



export function ArticlesList() {
  const ArticlesQuery = graphql(/* GraphQL */ `
      query Contents {
          contents(filter: { web: { id: { _null: false } } }) {
              id
              labels {
                  label {
                      name
                      id
                  }
              }
              translations(filter: { language: { code: { _eq: "cs-CZ" } } }) {
                  language {
                      code
                  }
                  name
                  slug
                  perex
              }
              web(filter: { shortcut: { _eq: "PL" } }) {
                  shortcut
              }
          }
      }

  `)

  const { data: articles, isLoading, isError, error } = useQuery({
    queryKey: ['articles'],
    queryFn: async () => request<ContentsQuery>(
      'https://directus.devmed.cz/graphql',
      ArticlesQuery
    )
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