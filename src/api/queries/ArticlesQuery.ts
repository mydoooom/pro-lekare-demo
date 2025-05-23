import { graphql } from '@/graphql'

export const ArticlesQuery = graphql(/* GraphQL */ `
    query Contents(
        $language: String = "cs-CZ",
        $limit: Int = null,
        $page: Int = null,
        $sort: [String] = ["-public_from"]
    ) {
        contents(
            filter: {web: {id: {_null: false}}}
            limit: $limit
            page: $page
            sort: $sort
        ) {
            id
            labels {
                label {
                    name
                    id
                }
            }
            translations(filter: {language: {code: {_eq: $language}}}) {
                language {
                    code
                }
                name
                slug
                perex
                date_created
                image {
                    id
                    width
                    height
                }
            }
            web(filter: {shortcut: {_eq: "PL"}}) {
                shortcut
            }
            public_from
            public_till
        }
    }
`)
