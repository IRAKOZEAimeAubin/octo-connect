'use client'

import {buttonVariants} from '@/components/ui/button'
import Link from 'next/link'

export default function Login() {
  return (
    <li className='list-none'>
      <Link
        href='/api/auth/signin'
        className={buttonVariants({variant: 'default'})}
      >
        Sign In
      </Link>
    </li>
  )
}
