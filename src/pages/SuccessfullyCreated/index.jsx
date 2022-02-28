import React from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom'
import { Button, useToast, Stack, Divider } from '@chakra-ui/react'
import Cow from '../../icons/cow.svg'

const Sucess = () => {
  const navigate = useNavigate()
  
  return (
    <div className="container">
      <div className="square">
        <div className="components">
          <span className="title">Sua conta foi criada com sucesso</span>
          <Button className="button"
          bg='#72C14D'
          color='white'
          _hover={{ bg: '#5da73b'}}
          size="lg" 
          fontSize='md'
          onClick={() => navigate('/login')}>Ir para tela de Login
          </Button>
        </div>
        <img src={Cow} alt="cow" className="cow"/>
      </div>
    </div>
  )
}

export default Sucess