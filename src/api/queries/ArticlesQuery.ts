import { graphql } from '@/graphql'

export const ArticlesQuery = graphql(/* GraphQL */ `
    query Contents ($language: String!) {
        contents(filter: { web: { id: { _null: false } } }) {
            id
            labels {
                label {
                    name
                    id
                }
            }
            translations(filter: { language: { code: { _eq: $language } } }) {
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
