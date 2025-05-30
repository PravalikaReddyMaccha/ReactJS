import {useContext,createContext} from 'react'

const ThemeContext = createContext({

    themeMode : 'light',
    lightMode : ()=>{},
    darkMode : ()=>{},
})

export const ThemeContextProvider = ThemeContext.Provider;
const useTheme = () => useContext(ThemeContext);
export default useTheme;
