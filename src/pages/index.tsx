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
    <div className={`${acme.variable} ${manrope.variable}`}>
      <Navbar />
    </div>
  )
}
