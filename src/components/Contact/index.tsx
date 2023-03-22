import { motion } from "framer-motion"
import { IoIosSend } from "react-icons/io"

function Contact() {
  return (
    <main
      className="container mx-auto flex flex-col gap-4 px-4 py-16 xl:w-5/6"
      id="contact"
    >
      <div className="flex">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="underline-text mb-4 w-auto font-manrope text-4xl font-bold text-slate-700 dark:text-white"
        >
          Contact
        </motion.h1>
      </div>

      <div className="flex w-full flex-col justify-between gap-8 md:flex-row">
        <div className="flex max-w-lg flex-1 flex-col gap-6">
          <motion.h3
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="w-auto font-manrope text-2xl font-bold text-slate-700 dark:text-slate-50"
          >
            If you like what you see, let's work together
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="font-manrope text-lg font-semibold tracking-wide text-slate-500 dark:text-slate-50"
          >
            Have any questions? Reach out to me from this contact form and I
            will get back to you shortly.
          </motion.p>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="flex max-w-lg flex-1 flex-col gap-4 rounded-2xl bg-slate-100 p-8 dark:bg-slate-500 md:px-4 xl:p-8"
        >
          <input
            placeholder="Name *"
            required
            className="w-full rounded-lg bg-white p-3 outline-none dark:bg-slate-700"
          />
          <input
            placeholder="Email *"
            required
            type="email"
            className="w-full rounded-lg bg-white p-3 outline-none dark:bg-slate-700"
          />
          <textarea
            rows={10}
            required
            placeholder="Message *"
            className="w-full rounded-lg bg-white p-3 outline-none dark:bg-slate-700"
          />

          <button
            type="submit"
            className="flex items-center gap-1 self-center rounded-lg bg-white px-3 py-2 font-manrope text-lg font-semibold capitalize text-slate-500 shadow-md dark:bg-slate-700 dark:text-slate-50"
          >
            send <IoIosSend className="h-5 w-5" />
          </button>
        </motion.form>
      </div>
    </main>
  )
}

export default Contact
