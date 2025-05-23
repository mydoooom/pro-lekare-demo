"use client"

import { MenuBar } from '@/components/ui'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import User from '@/assets/icons/user.svg'
import Mail from '@/assets/icons/mail.svg'
import Hamburger from '@/assets/icons/hamburger.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export type MenuItem = {
  label: string,
  href: string
}

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

const HeaderButtons = () => (
  <div className='flex gap-[8px]'>
    <Button variant='text' leftSection={<User/>}>
      Přihlásit
    </Button>
    <Button variant='outlined' leftSection={<Mail/>}>
      Newsletter
    </Button>
  </div>
)

export function Header () {
  const pathname = usePathname();
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  return (
    <>
      <header className="fixed top-0 w-full bg-white ">
        <div className='container mx-auto py-4 px-4 flex justify-between items-center '>
          <div>
            <Link href={'/'}>
              <Image
                src="/logoPL.svg"
                alt="proLékaře logo"
                width={164}
                height={32}
              />
            </Link>
          </div>
          <div className='hidden lg:block'>
            <HeaderButtons/>
          </div>
          <div className='block lg:hidden'>
            <Button variant='outlined' className={'p-[16px] cursor-pointer'}
                    onClick={() => setIsMenuVisible(!isMenuVisible)}>
                <span className='transform scale-125'>
                  <Hamburger/>
                </span>
            </Button>
          </div>
        </div>
        <hr/>
        <div className={`${isMenuVisible ? 'block' : 'hidden'} p-4 border-b border-neutral-400 shadow`}>
          <ul className='flex flex-col gap-4 items-end my-4'>
            {menuItems.map(({ label, href }, index) => (
              <li key={index} className='cursor-pointer' onClick={() => setIsMenuVisible(false)}>
                <Link href={href} className={`${pathname === href ? 'text-red-800' : ''}`}>{label}</Link>
              </li>
            ))}
          </ul>
          <hr/>
          <div className='flex justify-end my-4'>
            <HeaderButtons/>
          </div>
        </div>
        {!isMenuVisible && <MenuBar items={menuItems}/>}
      </header>

    </>
  )
}