import Image from 'next/image'
import { Inter } from 'next/font/google'
import Typewriter from '../components/Typewrite'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div className={"flex md:h-screen md:justify-center md:items-center"}>
        <Typewriter messages={["Developer", "Designer", "Entrepreneur"]} />
      </div>



    </main>
  )
}
