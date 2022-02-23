import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { chakra, Container, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate()
    const { currentUser } = useAuth()

    const { logout } = useAuth()

    return(
        <Container>
            <chakra.pre>
                {JSON.stringify(currentUser, null, 2)}
            </chakra.pre>
            <Button onClick={async e => {
                e.preventDefault()
                logout()
                navigate('/login')

            }}>Desconectar</Button>
        </Container>
    )
}

export default HomePage