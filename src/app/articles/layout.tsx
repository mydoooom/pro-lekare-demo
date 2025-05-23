import { Sidebar } from '@/components/articles/sidebar/sidebar'
import { ReactNode } from 'react'

export default function Layout ({ children }: Readonly<{ children: ReactNode; }>) {
  return (
    <div className='grid lg:grid-cols-[2fr_1fr] gap-4 container mx-auto mt-4 px-4'>
      <div>
        {children}
      </div>
      <Sidebar/>
    </div>

  )
}