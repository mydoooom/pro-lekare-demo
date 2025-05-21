import { graphql } from '@/graphql'

export const ArticlesQuery = graphql(/* GraphQL */ `
    query Contents {
        contents(filter: { web: { id: { _null: false } } }) {
            id
            labels {
                label {
                    name
                    id
                }
            }
            translations(filter: { language: { code: { _eq: "cs-CZ" } } }) {
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
