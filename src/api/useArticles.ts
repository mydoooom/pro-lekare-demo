import { graphql } from '@/graphql'
import { useQuery } from '@tanstack/react-query'
import  request from 'graphql-request'

const articles = graphql(/* GraphQL */ `
    query Articles {
        contents_translations {
            id,
            name,
            perex
        }
    }
`)

export function useArticles() {
  return useQuery({
    queryKey: ['articles'],
    queryFn: async () => request(
      'https://directus.devmed.cz/graphql',
      articles
    )
  })
}