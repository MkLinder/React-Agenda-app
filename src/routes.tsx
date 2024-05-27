import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppContext } from './components/AppContext'
import { LoginPage } from './pages/LoginPage'
import { Home } from './pages/Home'

const MainRoutes = () => {
    const { isLoggedIn } = useContext(AppContext)

    return (
        <Routes>
            <Route path='/' element={ <LoginPage/> }/>
            <Route path='/home/:id' element={ isLoggedIn ? <Home/> : <LoginPage/> }/>
        </Routes>
    )
}

export default MainRoutes