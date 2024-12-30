import React, {createContext,useContext,useEffect,useState} from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme' || 'dark'))

    useEffect(()=> {
        if(theme === "dark") {
            document.body.classList.add('dark');
        }else {
            document.body.classList.remove('dark');
        }
        localStorage.setItem('theme' , theme)
    },[theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};