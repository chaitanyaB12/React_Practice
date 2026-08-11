import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"


const Content = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className="text-center">
      <h1 className="bg-yellow-500">Welcome</h1>
      <p className={`h-screen text-4xl pt-32 text-white ${theme === "emerald" ? "bg-emerald-600" : "bg-black"}`}>Current Theme Is : {theme}</p>
    </div>
  )
}

export default Content