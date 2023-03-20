import { useState } from "react"
import { IoMenu } from "react-icons/io5"

function Navbar() {
  const [showSidebar, setShowSideBar] = useState(false)

  const setSidebar = (val: boolean) => setShowSideBar(val)

  return (
    <nav className="container mx-auto flex items-center justify-between py-8 px-4 xl:w-5/6">
      <h1 className="font-acme text-3xl text-slate-700">{`< Tonisco />`}</h1>
      <ul className="hidden gap-4 md:flex">
        <li>
          <a
            className="px-4 font-manrope text-base font-bold capitalize text-slate-700"
            href="home"
          >
            home
          </a>
        </li>
        <li>
          <a
            className="px-4 font-manrope text-base font-bold capitalize text-slate-700"
            href="home"
          >
            about
          </a>
        </li>
        <li>
          <a
            className="px-4 font-manrope text-base font-bold capitalize text-slate-700"
            href="home"
          >
            project
          </a>
        </li>
        <li>
          <a
            className="px-4 font-manrope text-base font-bold capitalize text-slate-700"
            href="home"
          >
            contact
          </a>
        </li>
      </ul>
      <IoMenu
        className="block text-3xl text-slate-700 md:hidden"
        onClick={() => setSidebar(true)}
      />
      {showSidebar && (
        <>
          <div
            className="fixed left-0 top-0 block h-screen w-screen bg-black bg-opacity-50 md:hidden"
            onClick={() => setSidebar(false)}
            onKeyDown={() => setSidebar(false)}
          />
          <nav className="fixed left-0 top-0 flex h-screen w-[320px] flex-col gap-10 bg-white px-6 pt-8 shadow md:hidden">
            <h1 className="font-acme text-3xl text-slate-700">{`< Tonisco />`}</h1>
            <ul className=" flex flex-col gap-6 ">
              <li>
                <a
                  className="font-manrope text-base font-bold capitalize text-slate-700"
                  href="home"
                >
                  home
                </a>
              </li>
              <li>
                <a
                  className="font-manrope text-base font-bold capitalize text-slate-700"
                  href="home"
                >
                  about
                </a>
              </li>
              <li>
                <a
                  className="font-manrope text-base font-bold capitalize text-slate-700"
                  href="home"
                >
                  project
                </a>
              </li>
              <li>
                <a
                  className="font-manrope text-base font-bold capitalize text-slate-700"
                  href="home"
                >
                  contact
                </a>
              </li>
            </ul>
          </nav>
        </>
      )}
    </nav>
  )
}

export default Navbar
