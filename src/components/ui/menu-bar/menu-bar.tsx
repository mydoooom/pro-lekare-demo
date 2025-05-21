'use client'

import { Search } from '@/components/ui/search'
import Link from "next/link"
import { usePathname } from 'next/navigation'

type MenuItem = {
  label: string,
  href: string
}

export async function MenuBar() {
  const menuItems: MenuItem[] = [
    {
      label: 'Články',
      href: '/articles'
    },
    {
      label: 'Časopisy',
      href: '/magazines'
    },
    {
      label: 'Obory',
      href: '#'
    },
    {
      label: 'Vzdělávání',
      href: '#'
    },
    {
      label: 'Kongresy',
      href: '#'
    },
    {
      label: 'Videa',
      href: '#'
    },
    {
      label: 'Podcasty',
      href: '#'
    },
    {
      label: 'Praxe',
      href: '#'
    },
  ]

  const pathname = usePathname();

  return (
    <>
      <nav className='h-16 border-b border-b-neutral-400 shadow-sm'>
        <div className='container mx-auto h-full flex justify-between items-center'>
          <ul className='h-full flex items-center gap-8'>
            {menuItems.map(({ label, href }, index) => (
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
          <Search/>
        </div>
      </nav>
    </>
  )
}