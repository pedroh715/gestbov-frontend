import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToast, Stack, Button, Divider } from '@chakra-ui/react'
import { useAuth } from '../../contexts/AuthContext'

const ForgotPassword = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const { forgotPassword } = useAuth()
    const toast = useToast()

  return (
    <div className="body">
      <div className="forms">
        <div className="form login">
          <span className="title">Esqueci minha senha</span>
          <form action="#" onSubmit={async e => {
              e.preventDefault()

              forgotPassword(email)
              .then(response =>  {
                  console.log(response)
                  toast({
                    description: "Redefinição de senha gerada, cheque seu email.",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })
              }).catch(e => {
                  console.log(e.message)
                  toast({
                    description: e.message,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })
            })
          }}>

            <div className="input-field">
              <input  
              type="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Insira seu email" 
               required/>
              <i className="uil uil-envelope icon"></i>
            </div> 


            {/* <div className="input-field button">
              <input type="button" value="Login"/>
              </div> */}

            <Stack marginTop='34'>
              <Button type="submit" 
              
              isFullWidth
              bg='#72C14D'
              color='white'
              _hover={{ bg: '#5da73b' }}
              size="lg" 
              fontSize='md'>Enviar</Button>"
            </Stack>
          </form>

          <div className="divider">
            <Divider width={210}/>     
            <h4>OU</h4> 
            <Divider width={210}/>
          </div>
          
          <Stack>
          <Button
            size="lg"
            fontSize='md'
            isFullWidth
            colorScheme='green'
            onClick={() => navigate('/login')}
            >
            Fazer Login
            </Button>
          </Stack>

        </div>
      </div>
    </div>
  )
}

export default ForgotPassword