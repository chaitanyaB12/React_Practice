import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Button from "./components/Button"
import { useState } from "react"
import { countcontext } from "./context/CounterContext"

function App() {
  const [counter , setCounter] = useState(0);
  const Heros = [
    {name :"Batman", Power:"StrongHuman"} , {name:"Superman" , power:"Infinite"} ,{name : "Thor" , power:"ThunderStrom"}
  ]


  return (
    <>
    <countcontext.Provider value ={{counter , setCounter , Heros}}>
      <Navbar/>
      <Home />
      <Button/>
      </countcontext.Provider>
    </>
  )
}

export default App
