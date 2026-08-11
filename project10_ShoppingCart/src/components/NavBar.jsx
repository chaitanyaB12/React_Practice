import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"


const NavBar = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  const changeTheme = ()=>{
    setTheme(theme === "emerald" ? "dark" : "emerald")
  }

  return (
   <nav className="flex justify-between items-center bg-blue-500 px-6 py-4 text-white">
      <h1 className="text-2xl font-bold">
        Website
      </h1>
  <button
    className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100"
    onClick={changeTheme}
  >
    Change Theme
  </button>
</nav>  
  )
}

export default NavBar