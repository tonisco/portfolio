import Typed from "react-typed"
import { FaLinkedin, FaGithub } from "react-icons/fa"

function Hero() {
  let typedRef: { cursor: { remove: () => void } }
  let typedRef1: { cursor: { remove: () => void } }

  return (
    <main className="container mx-auto flex flex-1 items-center px-4 xl:w-5/6">
      <div className="flex h-full flex-col justify-center gap-5">
        <p className="flex gap-2 font-manrope text-xl font-bold text-slate-700 dark:text-slate-50 sm:text-2xl">
          Hello 👋, I'm
          <Typed
            strings={["Umeozulu Anthony"]}
            typeSpeed={40}
            typedRef={(typed: any) => {
              typedRef = typed
            }}
            onComplete={() => {
              typedRef?.cursor.remove()
            }}
            className="inline-block text-blue-600 dark:text-blue-400"
          />
        </p>

        <Typed
          className="font-manrope text-3xl font-bold capitalize text-slate-700 dark:text-slate-50 sm:text-5xl"
          strings={[
            "frontend developer",
            "backend developer",
            "mobile developer",
            "fullstack developer",
          ]}
          typeSpeed={40}
          backSpeed={30}
          backDelay={600}
          startDelay={1800}
          typedRef={(typed: any) => {
            typedRef1 = typed
          }}
          onComplete={() => {
            typedRef1?.cursor.remove()
          }}
        />
        <p className="max-w-3xl font-manrope text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-300 sm:text-base">
          I solve problems and make responsive designs, robust APIs and scalable
          softwares, test and maintain applications .
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/tonisco" target="_blank" rel="noreferrer">
            <FaGithub className="text-2xl text-slate-700 dark:text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/ugonna-anthony-532605ab"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-2xl text-blue-600 dark:text-white" />
          </a>
        </div>
      </div>
    </main>
  )
}

export default Hero
