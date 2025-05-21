import { TypedDocumentNode } from '@graphql-typed-document-node/core'
import gqlRequest, { RequestDocument } from 'graphql-request'

export default async function request<TData, TVariables extends object = {}>(
  document: RequestDocument | TypedDocumentNode<TData, TVariables>,
  variables?: TVariables
): Promise<TData> {
  return gqlRequest<TData>(
    'https://directus.devmed.cz/graphql',
    document,
    variables || {}
  )
}