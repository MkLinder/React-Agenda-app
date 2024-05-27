import { createContext, useState } from 'react'

interface IAppContext {
    userId: string,
    isLoggedIn: boolean,
    setUserId: (setUserId: string) => void,
    setIsLoggedIn: (setIsloggedIn: boolean) => void
}

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }: any) => {
    const [ isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [ userId, setUserId ] = useState<string>('')

    return (
        <AppContext.Provider value={{ userId, setUserId, isLoggedIn, setIsLoggedIn }}>
            { children }
        </AppContext.Provider>
    )
}