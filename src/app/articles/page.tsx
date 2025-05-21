import { ArticlesList } from '@/components/articles'
import { ContentsQuery } from '@/graphql/graphql'
import { getQueryClient } from '@/utils/getQueryClient'
import request from '@/graphql/request'
import {ArticlesQuery} from '@/api/queries/ArticlesQuery'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

export default async function ArticlesPage () {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey:['articles'],
    queryFn: () => request<ContentsQuery>(ArticlesQuery)
  })

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ArticlesList/>
      </HydrationBoundary>
    </>
  )
}