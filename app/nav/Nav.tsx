import Link from 'next/link'
import Login from './Login'
import {getServerSession} from 'next-auth/next'
import {authOptions} from '../../pages/api/auth/[...nextauth]'
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import LogOut from './LogOut';

export default async function Nav() {
  const session = await getServerSession(authOptions)
  return (
    <nav className='flex justify-between items-center py-8'>
      <Link href={'/'}>
        <h1 className='font-bold text-xl'>OctoConnect</h1>
      </Link>
      <ul className='flex items-center gap-6'>
        {!session?.user && <Login />}
        {session?.user && <LogOut />}
        {session?.user && (
          <Avatar>
            <AvatarImage src={session?.user?.image!} />
            <AvatarFallback>{`${session?.user?.name![0]}`}</AvatarFallback>
          </Avatar>
        )}
      </ul>
    </nav>
  )
}
