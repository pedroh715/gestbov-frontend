import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import SignIn from './pages/Register'
import HomePage from './pages/HomePage'

const AppRoutes = () => {
    return (  
        <Router>
            <Routes>
                <Route exact path='/login' element={<LoginPage/>}/>
                <Route exact path='/criar-conta' element={<SignIn/>}/>
                <Route exact path='/dashboard' element={<HomePage/>}/>
            </Routes>  
        </Router>      
    )
}

export default AppRoutes