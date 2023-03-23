import { motion, spring } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { IoMoon, IoSunny } from "react-icons/io5"

function DarkModeButton() {
  const [isDark, setIsDark] = useState(true)

  const { setTheme, theme } = useTheme()

  const changeTheme = () => {
    if (theme === "light") setTheme("dark")
    else setTheme("light")
  }

  useEffect(() => {
    if (theme) {
      const usingDark = theme === "dark"
      if (isDark !== usingDark) setIsDark(usingDark)
    }
  }, [isDark, theme])

  return (
    <div
      className={`fixed bottom-3 right-3 z-10 flex h-12 w-8 cursor-pointer flex-col items-center justify-start rounded-full bg-slate-700 p-1 dark:bg-white ${
        isDark && "justify-end"
      }`}
      onClick={changeTheme}
    >
      <motion.div
        layout
        transition={spring}
        className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md dark:bg-slate-700"
      >
        <motion.div
          whileTap={{ rotate: 360 }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <IoMoon className="h-4 w-4 text-white" />
          ) : (
            <IoSunny className="h-4 w-4 text-yellow-300" />
          )}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default DarkModeButton
