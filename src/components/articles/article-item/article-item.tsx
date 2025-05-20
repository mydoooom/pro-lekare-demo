import { Contents_Translations } from '@/graphql/graphql'

interface ArticleItemProps {
  article: Contents_Translations
}

export function ArticleItem({article}: ArticleItemProps) {
  return (
    <>
      <h1>{article.name}</h1>
    </>
  )
}