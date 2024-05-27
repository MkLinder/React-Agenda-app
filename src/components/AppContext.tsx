import { createContext, useState } from 'react'

interface IAppContext {
    user: string,
    isLoggedIn: boolean,
    setIsLoggedIn: (setIsloggedIn: boolean) => void
}

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }: any) => {
    const [ isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const user = ''

    return (
        <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
            { children }
        </AppContext.Provider>
    )
}