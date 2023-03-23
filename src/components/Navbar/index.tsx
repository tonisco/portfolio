import { useEffect, useState } from "react"
import { IoClose, IoMenu } from "react-icons/io5"
import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/navigation"
import Link from "next/link"

function Navbar() {
  const [showSidebar, setShowSideBar] = useState(false)
  const [fixedNav, setFixedNav] = useState(false)

  const { push } = useRouter()

  const setSidebar = (val: boolean) => setShowSideBar(val)

  const sideBarNavigate = (id: string) => {
    setShowSideBar(false)
    push(id)
  }

  useEffect(() => {
    const handleFixed = () => {
      if (window.pageYOffset > 90) {
        if (!fixedNav) setFixedNav(true)
      } else if (fixedNav) setFixedNav(false)
    }

    window.addEventListener("scroll", handleFixed)
    return () => window.removeEventListener("scroll", handleFixed)
  }, [fixedNav])

  return (
    <nav>
      <div
        className={`z-10 w-full transition-all duration-700 ease-out ${
          fixedNav ? "fixed shadow-lg" : "absolute"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between bg-white py-5 px-4 dark:bg-slate-700 xl:w-5/6">
          <h1 className="font-acme text-3xl text-slate-700 dark:text-white">{`< Tonisco />`}</h1>
          <main className="flex items-center gap-4">
            <ul className="hidden gap-4 md:flex">
              <li>
                <Link className="link" href="/">
                  home
                </Link>
              </li>
              <li>
                <Link className="link" href="#about">
                  about
                </Link>
              </li>
              <li>
                <Link className="link" href="#projects">
                  projects
                </Link>
              </li>
              <li>
                <Link className="link" href="#contact">
                  contact
                </Link>
              </li>
            </ul>
            <IoMenu
              className="block text-3xl text-slate-700 dark:text-white md:hidden"
              onClick={() => setSidebar(true)}
            />
          </main>
        </div>
      </div>
      <AnimatePresence>
        {showSidebar && (
          <motion.div
            className="fixed left-0 top-0 z-10 block h-screen w-screen bg-black bg-opacity-50 dark:bg-white dark:bg-opacity-50 md:hidden"
            onClick={() => setSidebar(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showSidebar && (
          <motion.nav
            className="fixed left-0 top-0 z-10 flex h-screen w-[320px] flex-col gap-10 bg-white px-6 pt-8 shadow dark:bg-slate-700 md:hidden"
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            <div className="flex justify-between pr-4">
              <h1 className="font-acme text-3xl text-slate-700 dark:text-white">{`< Tonisco />`}</h1>
              <IoClose
                className="text-3xl text-slate-700 dark:text-white"
                onClick={() => setSidebar(false)}
              />
            </div>
            <ul className=" flex flex-col gap-6 ">
              <li>
                <button
                  type="button"
                  className="side-link"
                  onClick={() => sideBarNavigate("#home")}
                >
                  home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="side-link"
                  onClick={() => sideBarNavigate("#about")}
                >
                  about
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="side-link"
                  onClick={() => sideBarNavigate("#projects")}
                >
                  projects
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="side-link"
                  onClick={() => sideBarNavigate("#about")}
                >
                  contact
                </button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
