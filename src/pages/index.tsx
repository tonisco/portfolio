import About from "@/components/About"
import Contact from "@/components/Contact"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects"
import { Acme, Manrope } from "next/font/google"
import { Toaster } from "react-hot-toast"
import Modal from "react-modal"

const acme = Acme({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--acme-font",
})

const manrope = Manrope({ subsets: ["greek"], variable: "--manrope-font" })

Modal.setAppElement("#modals")

export default function Home() {
  return (
    <div
      className={`${acme.variable} ${manrope.variable} bg-white dark:bg-slate-700`}
    >
      <div id="modals" />
      <Toaster />
      <div className="flex h-screen flex-col">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Projects />
      <Contact />
    </div>
  )
}
