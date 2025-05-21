import { TypedDocumentNode } from '@graphql-typed-document-node/core'
import gqlRequest, { RequestDocument } from 'graphql-request'

export default async function request<T>(document: RequestDocument | TypedDocumentNode<T, object>) {
  return gqlRequest<T>(
    'https://directus.devmed.cz/graphql',
    document
  )
}