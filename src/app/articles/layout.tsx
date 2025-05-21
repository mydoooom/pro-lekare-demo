import { ReactNode } from 'react'

export default function Layout ({ children }: Readonly<{ children: ReactNode; }>) {
  return (
    <div className='container mx-auto mt-4'>
      {children}
    </div>
  )
}