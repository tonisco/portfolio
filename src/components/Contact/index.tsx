import { motion } from "framer-motion"
import { IoIosSend } from "react-icons/io"
import { MdAlternateEmail, MdLocationPin, MdPhone } from "react-icons/md"
import emailjs from "@emailjs/browser"
import { useRef } from "react"
import toast from "react-hot-toast"

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

function Contact() {
  const form = useRef()

  const toastSuccess = () => toast.success("Email has been sent")
  const toastError = (err: string) => toast.error(err)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (serviceId && templateId && publicKey && form.current) {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        () => {
          toastSuccess()
        },
        (error) => {
          toastError(error.text)
        },
      )
    } else toastError("Failed to send message")
  }

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
          className="heading mb-8"
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
            className="w-auto font-manrope text-xl font-bold text-slate-700 dark:text-slate-50 sm:text-2xl"
          >
            If you like what you see, let's work together
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="font-manrope text-base font-semibold tracking-wide text-slate-500 dark:text-slate-50 sm:text-lg"
          >
            Have any questions? Reach out to me from this contact form and I
            will get back to you shortly.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="flex flex-col gap-2 font-manrope text-base font-semibold tracking-wide text-slate-500 dark:text-slate-50 sm:text-lg"
          >
            <div className="flex items-center gap-2">
              <MdAlternateEmail />
              <p>tonyumeozulu@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <MdPhone />
              <p>+2349091653652</p>
            </div>
            <div className="flex items-center gap-2">
              <MdLocationPin />
              <p>Lagos, Nigeria</p>
            </div>
          </motion.div>
        </div>
        <motion.form
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="flex max-w-lg flex-1 flex-col gap-4 rounded-2xl bg-slate-100 p-4 dark:bg-slate-500 sm:p-8 md:px-4 xl:p-8"
        >
          <input
            placeholder="Name *"
            required
            name="user_name"
            className="w-full rounded-lg bg-white p-3 outline-none dark:bg-slate-700"
          />
          <input
            placeholder="Email *"
            required
            name="user_email"
            type="email"
            className="w-full rounded-lg bg-white p-3 outline-none dark:bg-slate-700"
          />
          <textarea
            rows={10}
            required
            name="message"
            placeholder="Message *"
            className="w-full rounded-lg bg-white p-3 outline-none dark:bg-slate-700"
          />

          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "easeOut", duration: 0.4 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="flex items-center gap-1 self-center rounded-lg bg-white px-3 py-2 font-manrope text-lg font-semibold capitalize text-slate-500 shadow-md dark:bg-slate-700 dark:text-slate-50"
          >
            send <IoIosSend className="h-5 w-5" />
          </motion.button>
        </motion.form>
      </div>
    </main>
  )
}

export default Contact
