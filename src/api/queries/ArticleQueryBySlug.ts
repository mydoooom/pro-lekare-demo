import { graphql } from '@/graphql'

export const ArticleQueryBySlug = graphql(`
    query ContentBySlug($slug: String!, $languageCode: String!) {
        contents(
            filter: {
                web: {id: {_null: false}},
                translations: {slug: {_eq: $slug}}
            }
        ) {
            id
            labels {
                label {
                    name
                    id
                }
            }
            translations(filter: { language: { code: { _eq: $languageCode } } }) {
                language {
                    code
                }
                name
                slug
                perex
                content
            }
            web {
                shortcut
            }
        }
    }
`)