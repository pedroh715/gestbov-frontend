import React from 'react'
import { render } from 'react-dom'
import AppRoutes from './AppRoutes'
import AuthContextProvider from './contexts/AuthContext'


const App = () => {
  return (
    <AuthContextProvider>
      <AppRoutes/>
    </AuthContextProvider>
    )
  }


export default App;
