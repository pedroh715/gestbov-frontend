import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import SignIn from './pages/Register'
import HomePage from './pages/HomePage'

const AppRoutes = () => {
    return (
        <>
            <Router>
                    <Switch>
                        <Route exact path='/login' component={LoginPage}/>
                        <Route exact path='/criar-conta' component={SignIn}/>
                        <Route exact path='/dashboard' component={HomePage}/>
                    </Switch>  
            </Router>     
        </>  
    )
}

export default AppRoutes