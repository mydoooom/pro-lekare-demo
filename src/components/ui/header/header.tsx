import { Button } from '@/components/ui/button'
import Image from 'next/image'
import  User from '@/assets/icons/user.svg'
import Mail from '@/assets/icons/mail.svg'
import Link from 'next/link'

export function Header() {
  return (
    <>
      <header className="container py-4 mx-auto flex justify-between items-center">
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
        <div className='flex gap-[8px]codegetn'>
          <Button variant='text' leftSection={<User/>}>
            Přihlásit
          </Button>
          <Button variant='outlined' leftSection={<Mail/>}>
            Newsletter
          </Button>
        </div>
      </header>
    </>
  )
}