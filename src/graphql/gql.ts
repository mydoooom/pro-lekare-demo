/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n    query ContentBySlug($slug: String!, $languageCode: String!) {\n        contents(\n            filter: {\n                web: {id: {_null: false}},\n                translations: {slug: {_eq: $slug}}\n            }\n        ) {\n            id\n            labels {\n                label {\n                    name\n                    id\n                }\n            }\n            translations(filter: { language: { code: { _eq: $languageCode } } }) {\n                language {\n                    code\n                }\n                name\n                slug\n                perex\n                content\n            }\n            web {\n                shortcut\n            }\n        }\n    }\n": typeof types.ContentBySlugDocument,
    "\n    query Contents ($language: String!) {\n        contents(filter: { web: { id: { _null: false } } }) {\n            id\n            labels {\n                label {\n                    name\n                    id\n                }\n            }\n            translations(filter: { language: { code: { _eq: $language } } }) {\n                language {\n                    code\n                }\n                name\n                slug\n                perex\n            }\n            web(filter: { shortcut: { _eq: \"PL\" } }) {\n                shortcut\n            }\n        }\n    }\n": typeof types.ContentsDocument,
};
const documents: Documents = {
    "\n    query ContentBySlug($slug: String!, $languageCode: String!) {\n        contents(\n            filter: {\n                web: {id: {_null: false}},\n                translations: {slug: {_eq: $slug}}\n            }\n        ) {\n            id\n            labels {\n                label {\n                    name\n                    id\n                }\n            }\n            translations(filter: { language: { code: { _eq: $languageCode } } }) {\n                language {\n                    code\n                }\n                name\n                slug\n                perex\n                content\n            }\n            web {\n                shortcut\n            }\n        }\n    }\n": types.ContentBySlugDocument,
    "\n    query Contents ($language: String!) {\n        contents(filter: { web: { id: { _null: false } } }) {\n            id\n            labels {\n                label {\n                    name\n                    id\n                }\n            }\n            translations(filter: { language: { code: { _eq: $language } } }) {\n                language {\n                    code\n                }\n                name\n                slug\n                perex\n            }\n            web(filter: { shortcut: { _eq: \"PL\" } }) {\n                shortcut\n            }\n        }\n    }\n": types.ContentsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query ContentBySlug($slug: String!, $languageCode: String!) {\n        contents(\n            filter: {\n                web: {id: {_null: false}},\n                translations: {slug: {_eq: $slug}}\n            }\n        ) {\n            id\n            labels {\n                label {\n                    name\n                    id\n                }\n            }\n            translations(filter: { language: { code: { _eq: $languageCode } } }) {\n                language {\n                    code\n                }\n                name\n                slug\n                perex\n                content\n            }\n            web {\n                shortcut\n            }\n        }\n    }\n"): (typeof documents)["\n    query ContentBySlug($slug: String!, $languageCode: String!) {\n        contents(\n            filter: {\n                web: {id: {_null: false}},\n                translations: {slug: {_eq: $slug}}\n            }\n        ) {\n            id\n            labels {\n                label {\n                    name\n                    id\n                }\n            }\n            translations(filter: { language: { code: { _eq: $languageCode } } }) {\n                language {\n                    code\n                }\n                name\n                slug\n                perex\n                content\n            }\n            web {\n                shortcut\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Contents ($language: String!) {\n        contents(filter: { web: { id: { _null: false } } }) {\n            id\n            labels {\n                label {\n                    name\n                    id\n                }\n            }\n            translations(filter: { language: { code: { _eq: $language } } }) {\n                language {\n                    code\n                }\n                name\n                slug\n                perex\n            }\n            web(filter: { shortcut: { _eq: \"PL\" } }) {\n                shortcut\n            }\n        }\n    }\n"): (typeof documents)["\n    query Contents ($language: String!) {\n        contents(filter: { web: { id: { _null: false } } }) {\n            id\n            labels {\n                label {\n                    name\n                    id\n                }\n            }\n            translations(filter: { language: { code: { _eq: $language } } }) {\n                language {\n                    code\n                }\n                name\n                slug\n                perex\n            }\n            web(filter: { shortcut: { _eq: \"PL\" } }) {\n                shortcut\n            }\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;