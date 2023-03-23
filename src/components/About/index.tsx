import {
  SiCss3,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiTailwindcss,
  SiTestinglibrary,
  SiTrpc,
  SiTypescript,
} from "react-icons/si"
import { motion } from "framer-motion"

function About() {
  return (
    <div
      className="container mx-auto flex scroll-m-14 flex-col gap-4 px-4 py-8 xl:w-5/6"
      id="about"
    >
      <div className="flex">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="heading mb-4"
        >
          About
        </motion.h1>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="max-w-3xl font-manrope text-base font-semibold tracking-wide text-slate-500 dark:text-slate-50 sm:text-lg"
      >
        I have always been fascinated at how lines of codes become beautiful
        websites and applications so I started with a web beginner course. Today
        I convert ui designs into pixel perfect scalable web and mobile apps. I
        enjoy being challenged and engaged with projects that requires me to
        work outside my comfort and skill set, as i continue to learn new
        languages and development techniques and try to make a positive impact
        on the world through technology.
      </motion.p>

      <motion.h3
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="mt-8 w-auto font-manrope text-2xl font-bold text-slate-700 dark:text-slate-50"
      >
        Skills :
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="flex max-w-3xl flex-wrap gap-3 sm:gap-4"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          className="skill"
        >
          <SiReact className="skill-icon" />
          <p className="skill-text">react</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          className="skill"
        >
          <SiNextdotjs className="skill-icon" />
          <p className="skill-text">next js</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          className="skill"
        >
          <SiTypescript className="skill-icon" />
          <p className="skill-text">typescript</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          className="skill"
        >
          <SiTailwindcss className="skill-icon" />
          <p className="skill-text">tailwind</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          className="skill"
        >
          <SiNodedotjs className="skill-icon" />
          <p className="skill-text">node js</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          className="skill"
        >
          <SiExpress className="skill-icon" />
          <p className="skill-text">express</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          className="skill"
        >
          <SiPrisma className="skill-icon" />
          <p className="skill-text">prisma</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          className="skill"
        >
          <SiMongodb className="skill-icon" />
          <p className="skill-text">mongodb</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          className="skill"
        >
          <SiExpo className="skill-icon" />
          <p className="skill-text">expo</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          className="skill"
        >
          <SiReact className="skill-icon" />
          <p className="skill-text">react native</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          className="skill"
        >
          <SiJest className="skill-icon" />
          <p className="skill-text">jest</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          className="skill"
        >
          <SiTestinglibrary className="skill-icon" />
          <p className="skill-text">testing library</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          className="skill"
        >
          <SiTrpc className="skill-icon" />
          <p className="skill-text">trpc</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          className="skill"
        >
          <SiReactquery className="skill-icon" />
          <p className="skill-text">react query</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          className="skill"
        >
          <SiJavascript className="skill-icon" />
          <p className="skill-text">javascript</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          className="skill"
        >
          <SiDocker className="skill-icon" />
          <p className="skill-text">docker</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          className="skill"
        >
          <SiCss3 className="skill-icon" />
          <p className="skill-text">css</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          className="skill"
        >
          <SiFirebase className="skill-icon" />
          <p className="skill-text">firebase</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          className="skill"
        >
          <SiPostgresql className="skill-icon" />
          <p className="skill-text">postgresql</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          className="skill"
        >
          <SiMysql className="skill-icon" />
          <p className="skill-text">mysql</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About
