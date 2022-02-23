import React, {useContext} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import SignIn from './pages/Register'
import HomePage from './pages/HomePage'
import Sucess from './pages/SuccessfullyCreated'
import NotFound from './pages/NotFoundPage'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'

import AuthContextProvider from './contexts/AuthContext'
import { useAuth } from './contexts/AuthContext'


const AppRoutes = () => {
    const Private = ({children}) => {
        const { currentUser } = useAuth()

        if (!currentUser) {
            return <Navigate to='/login'/>
        }
        return children
    }
    return (  
        <Router>
            <AuthContextProvider>
                <Routes>
                    <Route exact path='/login' element={<LoginPage/>}/>
                    <Route exact path='/criar-conta' element={<SignIn/>}/>
                    <Route exact path='/dashboard' element={<Private><HomePage/></Private>}/>             
                    <Route exact path='*' element={<NotFound/>}/>
                    <Route exact path='/esqueci-minha-senha' element={<ForgotPassword/>}/>
                    <Route exact path='/alterar-senha' element={<ResetPassword/>}/>
                                
                </Routes>  
            </AuthContextProvider>
        </Router>      
    )
}

export default AppRoutes


