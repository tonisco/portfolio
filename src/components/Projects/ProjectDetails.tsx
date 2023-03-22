import Image from "next/image"
import Modal from "react-modal"
import { motion } from "framer-motion"
import { VscGithub } from "react-icons/vsc"
import { IoClose } from "react-icons/io5"
import { HiOutlineExternalLink } from "react-icons/hi"
import { projects } from "./projectList"

type Props = {
  isOpen: boolean
  close: () => void
  projectId: number
}

function ProjectDetails({ isOpen, close, projectId }: Props) {
  const selected = projects.find((project) => project.id === projectId)

  if (selected)
    return (
      <Modal
        isOpen={isOpen}
        overlayClassName="modal-overlay"
        className="relative flex max-h-[85%] w-full max-w-[85%] flex-col justify-between gap-10 overflow-y-auto rounded-lg bg-white p-4 outline-none dark:bg-slate-700 sm:p-8 md:flex-row xl:max-w-[75%]"
        shouldCloseOnOverlayClick
        onRequestClose={close}
      >
        <IoClose
          className="absolute top-2 right-2 cursor-pointer text-xl text-slate-700 dark:text-white sm:text-3xl md:top-4 md:right-4"
          onClick={close}
        />
        <div className="relative min-h-[250px] w-11/12 max-w-lg overflow-hidden rounded-md md:min-h-[450px] md:w-auto md:flex-1">
          <Image
            src={selected.image}
            alt={selected.image_alt}
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <h2 className="mb-4 font-manrope text-3xl font-bold capitalize tracking-wide text-slate-700 dark:text-white">
            {selected.name}
          </h2>
          <p className="whitespace-pre-line font-manrope text-lg font-semibold tracking-wide text-slate-500 dark:text-slate-300">
            {selected.description}
          </p>
          <div className="flex max-w-3xl flex-wrap gap-4">
            {selected.majorLibraries.map((libraries) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ ease: "easeOut", duration: 0.4 }}
                key={libraries}
                className="cursor-default rounded-lg bg-stone-50 p-2 shadow dark:bg-slate-800"
              >
                <p className="font-manrope text-sm font-medium capitalize text-slate-500 dark:text-slate-50">
                  {libraries}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="flex gap-8">
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ ease: "easeOut", duration: 0.4 }}
              whileTap={{ scale: 0.9 }}
              href={selected.liveLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 self-center rounded-lg border-2 border-blue-600 bg-white px-3 py-2 font-manrope text-lg font-semibold capitalize text-blue-600 shadow-md dark:border-slate-700 dark:bg-slate-50 dark:text-slate-700"
            >
              live
              <HiOutlineExternalLink />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ ease: "easeOut", duration: 0.4 }}
              whileTap={{ scale: 0.9 }}
              href={selected.githubLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 self-center rounded-lg bg-blue-600 px-3 py-2 font-manrope text-lg font-semibold capitalize text-white shadow-md dark:bg-slate-700 dark:text-slate-50"
            >
              <p>code</p>
              <VscGithub />
            </motion.a>
          </div>
        </div>
      </Modal>
    )

  return null
}

export default ProjectDetails
