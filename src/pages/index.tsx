
import { Inter } from 'next/font/google'
import Typewriter from '../components/Typewrite'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between pt-24 ${inter.className}`}>
      <div className={"flex md:justify-center md:items-center flex-col"}>
        <div className={""}>
          <img className={"rounded-full border border-white-900 shadow-md rounded-full scale-75 "} src={"./headshot.png"} alt={"My Profile Picture"}/>
        </div>
        <Typewriter messages={["Developer", "Designer", "Entrepreneur"]} />
      </div>



    </main>
  )
}
