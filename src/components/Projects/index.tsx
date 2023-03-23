import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { HiOutlineArrowRight } from "react-icons/hi"
import ProjectDetails from "./ProjectDetails"
import { projects } from "./projectList"

function Projects() {
  const isEven = (index: number) => index % 2 === 0

  const [isOpen, setIsOpen] = useState(false)
  const [id, setId] = useState<number>()

  const close = () => {
    setIsOpen(true)
    setId(undefined)
  }

  const open = (projectId: number) => {
    setId(projectId)
    setIsOpen(true)
  }

  return (
    <div
      className="container mx-auto flex flex-col gap-4 px-4 py-8 xl:w-5/6"
      id="projects"
    >
      {id && <ProjectDetails isOpen={isOpen} close={close} projectId={id} />}
      <div className="flex">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="heading"
        >
          Projects
        </motion.h1>
      </div>
      <div className="mt-5 flex flex-col gap-16 sm:mt-10">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="flex flex-col items-center justify-between gap-8 md:flex-row"
          >
            <motion.div
              initial={{ opacity: 0, x: isEven(i) ? 200 : -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className={`flex w-11/12 max-w-lg flex-1 flex-col gap-4 sm:w-4/5 sm:gap-6 md:w-auto md:flex-1 ${
                isEven(i) && "md:order-2"
              }`}
            >
              <h1 className="font-manrope text-2xl font-bold capitalize tracking-wide text-slate-700 dark:text-white sm:mb-4 sm:text-3xl">
                {project.name}
              </h1>
              <p className="font-manrope text-base font-semibold tracking-wide text-slate-500 dark:text-slate-300 sm:text-lg">
                {project.short_description}
              </p>
              <div className="flex max-w-3xl flex-wrap gap-2 sm:gap-4">
                {project.majorLibraries.map((libraries) => (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ ease: "easeOut", duration: 0.4 }}
                    key={libraries}
                    className="cursor-default rounded-lg bg-stone-50 p-2 shadow dark:bg-slate-800"
                  >
                    <p className="font-manrope text-xs font-medium capitalize text-slate-500 dark:text-slate-50 sm:text-sm">
                      {libraries}
                    </p>
                  </motion.div>
                ))}
              </div>
              <motion.button
                whileHover={{ gap: "16px", scale: 1.05 }}
                transition={{ ease: "easeOut", duration: 0.4 }}
                whileTap={{ gap: "4px", scale: 0.95 }}
                type="button"
                onClick={() => open(project.id)}
                className="mt-3 flex items-center gap-2 self-start font-manrope text-base font-semibold capitalize tracking-wide text-blue-500 sm:mt-6"
              >
                <p>see details </p>
                <HiOutlineArrowRight />
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: isEven(i) ? -200 : 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className="relative h-[200px] w-11/12 max-w-lg overflow-hidden rounded-md sm:h-[400px] sm:w-4/5 md:w-auto md:flex-1"
            >
              <Image
                src={project.image}
                alt={project.image_alt}
                fill
                className="object-cover object-top"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
