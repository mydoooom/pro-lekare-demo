"use client"

import { ArticlesQuery } from '@/api/queries/ArticlesQuery'
import { LIMIT } from '@/app/articles/utils/constants'
import { ArticlesItem } from '@/components/articles/articles-item/articles-item'
import { Button } from '@/components/ui/button'
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
      limit: LIMIT,
      page: pageParam
    }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.contents.length === LIMIT ? allPages.length + 1 : undefined
    },
    initialPageParam: 1
  })

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error: {error.message}</p>
  if (!data) return <p>No articles found</p>

  const allArticles = data.pages.flatMap(page => page.contents)

  return (
    <>
      {allArticles.map((article, index) => (
        <Fragment key={article.id}>
          <ArticlesItem article={article} main={index === 0}/>
          <hr/>
        </Fragment>
      ))}

      {hasNextPage && (
        <div className='flex justify-center my-4'>
          <Button
            variant='outlined'
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? 'Načítání...' : 'Načíst další stránky'}
          </Button>
        </div>
      )}
    </>
  )
}