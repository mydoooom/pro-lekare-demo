import { ReactNode } from 'react'

export default function Layout ({ children }: Readonly<{ children: ReactNode; }>) {
  return (
    <div className='container mx-auto mt-4'>
      <p className='text-xs text-gray-500 mb-4'>proLékaře</p>
      {children}
    </div>
  )
}