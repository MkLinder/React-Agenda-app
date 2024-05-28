import { createContext, useContext, useState } from 'react'
import { Conta, api } from '../Api'

interface IAppContext {
    userId: string,
    isLoggedIn: boolean,
    setUserId: (setUserId: string) => void,
    setIsLoggedIn: (setIsloggedIn: boolean) => void
}

interface UserData {
    id: string,
    name: string,
    gender: string,
    carrer: string,
    setId: (setId: string) => void,
    setName: (setName: string) => void,
    setGender: (setGender: string) => void,
    setCarrer: (setCarrer: string) => void
}

/** const userData = async (api: Promise<Conta>): Promise<UserData> => {
    const userData:UserData = await api 
    const data:UserData = {
        id: userData.id,
        name: userData.name,
        gender: userData.gender,
        carrer: userData.carrer
    }

    return data
}

const data = userData(api)
*/

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


export const UserContext = createContext({} as UserData)

export const UserContextProvider = ({ children }: any) => {
    const [ id, setId ] = useState<string>('')
    const [ name, setName ] = useState<string>('')
    const [ gender, setGender ] = useState<string>('')
    const [ carrer, setCarrer ] = useState<string>('')

    return (
        <UserContextProvider value={{ id, setId, name, setName, gender, setGender, carrer, setCarrer}}>
            { children }
        </UserContextProvider>
    )
}