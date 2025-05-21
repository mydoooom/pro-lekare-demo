"use client"

import { ArticleItem } from '@/components/articles/article-item/article-item'
import { ContentsQuery } from '@/graphql/graphql'

interface ArticlesListProps {
  articles: ContentsQuery
}

export function ArticlesList ({articles}: ArticlesListProps) {

  if (!articles) return <p>Články se nepodařily načíst</p>
  if (articles.contents.length === 0) return <p>Neexistují žádné články</p>

  return (
    <>
      {articles.contents.map(article => (
       <>
         <ArticleItem key={article.id} article={article}/>
         <hr/>
       </>
      ))}
    </>
  )
}