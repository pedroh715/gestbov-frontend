import React from 'react'
import { useAuth } from '../../contexts/AuthContext'

const HomePage = () => {
    const { currentUser } = useAuth()
    return(
        <h2>HomePage</h2>
    )
}

export default HomePage