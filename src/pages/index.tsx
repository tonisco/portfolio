import About from "@/components/About"
import Contact from "@/components/Contact"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import { Acme, Manrope } from "next/font/google"

const acme = Acme({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--acme-font",
})

const manrope = Manrope({ subsets: ["greek"], variable: "--manrope-font" })

export default function Home() {
  return (
    <div
      className={`${acme.variable} ${manrope.variable} bg-white dark:bg-slate-700`}
    >
      <div className="flex h-screen flex-col">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Contact />
    </div>
  )
}
