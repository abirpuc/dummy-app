import Image from 'next/image'
import User from './componets/User/User'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <User/>
      </div>
    </main>
  )
}
