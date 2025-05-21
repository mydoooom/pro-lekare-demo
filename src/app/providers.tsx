'use client'

import { getQueryClient } from '@/utils/getQueryClient'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

export default function Providers ({ children }: { children: ReactNode }) {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}