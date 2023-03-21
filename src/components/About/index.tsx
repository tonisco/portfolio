import {
  SiCss3,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
} from "react-icons/si"
import { motion } from "framer-motion"

function About() {
  return (
    <div
      className="container mx-auto flex flex-col gap-4 px-4 py-8 xl:w-5/6"
      id="about"
    >
      <div className="flex">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut" }}
          className="underline-text mb-4 w-auto font-manrope text-4xl font-bold text-slate-700 dark:text-white"
        >
          About
        </motion.h1>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut" }}
        className="max-w-3xl font-manrope text-lg font-semibold tracking-wide text-slate-500 dark:text-slate-50"
      >
        I have always been fascinated at how lines of codes become beautiful
        websites and applications so I started with a web beginner course. Today
        I convert ui designs into scalable web and mobile apps. I enjoy being
        challenged and engaged with projects that requires me to work outside my
        comfort and skill set, as i continue to learn new languages and
        development techniques and try to make a positive impact on the world
        through technology.
      </motion.p>

      <motion.h3
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut" }}
        className="mt-8 w-auto font-manrope text-2xl font-bold text-slate-700 dark:text-slate-50"
      >
        Skills :
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut" }}
        className="flex max-w-3xl flex-wrap gap-4"
      >
        <div className="skill">
          <SiReact className="skill-icon" />
          <p className="skill-text">react</p>
        </div>
        <div className="skill">
          <SiNextdotjs className="skill-icon" />
          <p className="skill-text">next js</p>
        </div>
        <div className="skill">
          <SiTypescript className="skill-icon" />
          <p className="skill-text">typescript</p>
        </div>
        <div className="skill">
          <SiTailwindcss className="skill-icon" />
          <p className="skill-text">tailwind</p>
        </div>
        <div className="skill">
          <SiNodedotjs className="skill-icon" />
          <p className="skill-text">node js</p>
        </div>
        <div className="skill">
          <SiExpress className="skill-icon" />
          <p className="skill-text">express</p>
        </div>
        <div className="skill">
          <SiPrisma className="skill-icon" />
          <p className="skill-text">prisma</p>
        </div>
        <div className="skill">
          <SiMongodb className="skill-icon" />
          <p className="skill-text">mongodb</p>
        </div>
        <div className="skill">
          <SiExpo className="skill-icon" />
          <p className="skill-text">expo</p>
        </div>
        <div className="skill">
          <SiReact className="skill-icon" />
          <p className="skill-text">react native</p>
        </div>
        <div className="skill">
          <SiJavascript className="skill-icon" />
          <p className="skill-text">javascript</p>
        </div>
        <div className="skill">
          <SiDocker className="skill-icon" />
          <p className="skill-text">docker</p>
        </div>
        <div className="skill">
          <SiCss3 className="skill-icon" />
          <p className="skill-text">css</p>
        </div>
        <div className="skill">
          <SiFirebase className="skill-icon" />
          <p className="skill-text">firebase</p>
        </div>
        <div className="skill">
          <SiTrpc className="skill-icon" />
          <p className="skill-text">trpc</p>
        </div>
        <div className="skill">
          <SiReactquery className="skill-icon" />
          <p className="skill-text">react query</p>
        </div>
        <div className="skill">
          <SiPostgresql className="skill-icon" />
          <p className="skill-text">postgresql</p>
        </div>
        <div className="skill">
          <SiMysql className="skill-icon" />
          <p className="skill-text">mysql</p>
        </div>
      </motion.div>
    </div>
  )
}

export default About
