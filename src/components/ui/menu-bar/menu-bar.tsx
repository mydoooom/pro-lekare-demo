'use client'

import { MenuItem } from '@/components/ui'
import { Search } from '@/components/ui/search'
import Link from "next/link"
import { usePathname } from 'next/navigation'

export function MenuBar ({ items }: { items?: MenuItem[] }) {
  const pathname = usePathname();

  return (
    <>
      <nav className='h-16 border-b border-b-neutral-400 shadow-sm'>
        <div className={`container mx-auto px-4 h-full flex ${items ? 'justify-between' : ''} items-center`}>
          {items && (
            <ul className='h-full flex items-center gap-8'>
              {items.map(({ label, href }, index) => (
                <li key={index} className='h-full relative'>
                  <Link
                    href={href}
                    className={`h-full grid place-items-center  ${pathname !== href ? 'text-gray-500' : ''}`}
                  >
                    {label}
                  </Link>
                  {pathname === href && <span className='absolute bottom-0 w-full h-1 bg-red-700'/>}
                </li>
              ))}
            </ul>
          )
          }
          <Search/>
        </div>
      </nav>
    </>
  )
}