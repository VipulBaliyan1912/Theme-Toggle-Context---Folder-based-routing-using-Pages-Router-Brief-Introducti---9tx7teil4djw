import React,{useState} from 'react';

const ThemeContext = React.createContext()
const ThemeProvider = ({children}) =>{
    const [theme,setTheme]=useState();
    const toggleTheme=()=>{
        setTheme((theme)=>{
            return theme==='light'? 'dark': 'light'
        })
    }

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider,ThemeContext}