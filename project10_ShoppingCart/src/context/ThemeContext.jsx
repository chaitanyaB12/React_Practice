import { createContext, useState } from "react";


export const ThemeContext = createContext()

export const ThemeProvider = ({childrean})=>{

    const [theme , setTheme] = useState("light")
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {childrean}
        </ThemeContext.Provider>
    )
}