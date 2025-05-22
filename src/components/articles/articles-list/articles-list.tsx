"use client"

import { ArticlesQuery } from '@/api/queries/ArticlesQuery'
import { ArticlesItem } from '@/components/articles/articles-item/articles-item'
import { ContentsQuery } from '@/graphql/graphql'
import request from '@/graphql/request'
import { useInfiniteQuery } from '@tanstack/react-query'
import { Fragment } from 'react'

export function ArticlesList () {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteQuery({
    queryKey: ['articles'],
    queryFn: ({ pageParam = 1 }) => request<ContentsQuery>(ArticlesQuery, {
      limit: 6,
      page: pageParam
    }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.contents.length === 5 ? allPages.length + 1 : undefined
    },
    initialPageParam: 1
  })

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error: {error.message}</p>
  if (!data) return <p>No articles found</p>

  const allArticles = data.pages.flatMap(page => page.contents)

  return (
    <>
      {allArticles.map(article => (
        <Fragment key={article.id}>
          <ArticlesItem article={article}/>
          <hr/>
        </Fragment>
      ))}

      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? 'Loading...' : 'Load more'}
        </button>
      )}
    </>
  )
}