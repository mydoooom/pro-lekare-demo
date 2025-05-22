import { ArticlesList } from '@/components/articles'
import { ContentsQuery } from '@/graphql/graphql'
import request from '@/graphql/request'
import { ArticlesQuery } from '@/api/queries/ArticlesQuery'
import { getQueryClient } from '@/utils/getQueryClient'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

export default async function ArticlesPage () {
  const queryClient = getQueryClient()

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['articles'],
    queryFn: ({ pageParam = 1 }) => request<ContentsQuery>(ArticlesQuery, {
      limit: 5,
      page: pageParam
    }),
    getNextPageParam: (lastPage: { contents: string | any[] }, allPages: string | any[]) => {
      return lastPage.contents.length === 5 ? allPages.length + 1 : undefined
    },
    initialPageParam: 1
  })

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <p className='text-xs text-gray-500 mb-4'>proLékaře</p>
        <h2 className='uppercase text-3xl font-bold mb-4'>Články</h2>
        <hr/>
        <ArticlesList/>
      </HydrationBoundary>
    </>
  )
}