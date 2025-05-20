import { Search } from '@/components/ui/search'
import Link from "next/link"

type MenuItem = {
  label: string,
  href: string
}

export function MenuBar() {
  const menuItems = [
    {
      label: 'Články',
      href: '#'
    },
    {
      label: 'Časopisy',
      href: '#'
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

  return (
    <>
      <nav className='h-16 border-b border-b-neutral-400 shadow-sm'>
        <div className='container mx-auto h-full flex justify-between items-center'>
          <ul className='h-full flex items-center gap-8'>
            {menuItems.map(({ label, href }) => (
              <li>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
          <Search/>
        </div>

      </nav>
    </>
  )
}