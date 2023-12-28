
import { UserButton } from '@clerk/nextjs/app-beta'
export default function Home() {
  return (
    <div className='h-screen'>
              <UserButton afterSignOutUrl="/"/>

    </div>
  )
}
