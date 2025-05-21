"use client"

import { ArticlesItem } from '@/components/articles/articles-item/articles-item'
import { ContentsQuery } from '@/graphql/graphql'

interface ArticlesListProps {
  articles: Array<ContentsQuery['contents'][number]>
}

export function ArticlesList ({articles}: ArticlesListProps) {

  if (!articles) return <p>Články se nepodařily načíst</p>
  if (articles.length === 0) return <p>Neexistují žádné články</p>

  console.log(articles)
  return (
    <>
      {articles.map(article => (
       <>
         <ArticlesItem key={article.id} article={article}/>
         <hr/>
       </>
      ))}
    </>
  )
}